/**
 * Symbol used to mark a result object returned by an ArgProcessor.
 * The processor should return an object where this Symbol is the key.
 *
 * @example
 * ```ts
 * return {
 *   [CMD_ARG_PROCESSOR_RESULT]: [parsedValue, 'suggestedName', { excludePositional: true }]
 * };
 * ```
 */
export const CMD_ARG_PROCESSOR_RESULT = Symbol('CMD_ARG_PROCESSOR_RESULT');

/**
 * Internal Symbol used to mark values that have fallen back to their raw string
 * representation due to a ReferenceError (undefined variable).
 * This allows the CmdArgParser to distinguish between a deliberate string "undefined"
 * and a failed variable lookup.
 */
export const CMD_ARG_UNRESOLVED_SYMBOL = Symbol('UNRESOLVED');

/**
 * Symbol used to mark special parameters (Flags) in a wrapped object.
 * Stored as a non-enumerable property on the wrapped value (e.g., Boolean, String).
 *
 * @example
 * ```ts
 * const CmdArgFlagValue = flags['debug'];
 * const prefix = CmdArgFlagValue[CMD_ARG_FLAG_SYMBOL]; // returns '!'
 * ```
 */
export const CMD_ARG_FLAG_SYMBOL = Symbol('flag');

/**
 * Metadata attached to flag values.
 */
export interface CmdArgFlagMetadata {
  /** The prefix used to define this flag (e.g., '!', '#') */
  [CMD_ARG_FLAG_SYMBOL]: string;
}

/**
 * A flag value is a wrapped primitive (Boolean, String, Number) or object
 * that carries its prefix metadata via CMD_ARG_FLAG_SYMBOL.
 */
export type CmdArgFlagValue = (Boolean | String | Number | any) & CmdArgFlagMetadata;

/**
 * A map of flag names to their wrapped values.
 */
export type CmdArgFlagsRecord = Record<string, CmdArgFlagValue>;

/**
 * CmdArgToken types for lexical analysis.
 */
export enum CmdArgTokenType {
  EOF = 'EOF',
  /** Argument delimiter (default: ',') */
  COMMA = 'COMMA',
  /** Assignment operator (default: '=' or ':') */
  ASSIGN = 'ASSIGN',
  /** Left parenthesis '(' */
  L_PAREN = 'L_PAREN',
  /** Right parenthesis ')' */
  R_PAREN = 'R_PAREN',
  /** Left square bracket '[' */
  L_BRACKET = 'L_BRACKET',
  /** Right square bracket ']' */
  R_BRACKET = 'R_BRACKET',
  /** Left curly brace '{' */
  L_BRACE = 'L_BRACE',
  /** Right curly brace '}' */
  R_BRACE = 'R_BRACE',
  /** Quoted string "..." or '...' or `...` */
  STRING = 'STRING',
  /** Valid JS identifier (excluding reserved words like true/false) */
  IDENTIFIER = 'IDENTIFIER',
  /** Raw text segment, used for expressions or unquoted strings */
  RAW = 'RAW',
}

/**
 * Represents a lexical CmdArgToken with its type, value, and source position.
 */
export interface CmdArgToken {
  /** The type of the CmdArgToken */
  type: CmdArgTokenType;
  /** The literal string value of the CmdArgToken */
  value: string;
  /** Starting index in the input string */
  start: number;
  /** Ending index in the input string */
  end: number;
}

/**
 * Options for processors to control how the parsed value is distributed in the final result.
 */
export interface CmdArgProcessorResultOptions {
  /**
   * If true, the argument will be excluded from the positional `args` array.
   * Useful when a positional argument is intended to be treated as a named parameter only.
   */
  excludePositional?: boolean;
}

import type { CmdArgParser } from './parser';

/**
 * Symbol used to mark a result object returned by an ArgProcessor.
...
 */
export interface CmdArgContext {
  /** True if the argument was explicitly assigned using an assigner (e.g., k=v) */
  isNamed: boolean;
  /** The raw input substring of this argument (after stripping the name and assigner if present) */
  rawValue: string;
  /** The explicitly specified name (k) in a `k=v` pair */
  name?: string;
  /**
   * If the argument is positional and its raw text is a valid identifier,
   * this holds that identifier name (used for auto-mapping).
   */
  identifierAsName?: string;
  /** All lexical tokens belonging to this argument */
  tokens: CmdArgToken[];
  /** The 0-based index of this argument in the positional sequence */
  index: number;
  /** The evaluation scope containing variables and functions */
  scope?: Record<string, any>;
  /** The configuration options used by the CmdArgParser */
  options: CmdArgParserOptions;
  /** Reference to the CmdArgParser instance for recursive parsing */
  CmdArgParser: CmdArgParser;
}


/**
 * Type definition for an argument processor function.
 * It can return a plain value (for standard evaluation) or a Protocol-compliant object.
 */
export type ArgProcessor = (ctx: CmdArgContext) => any | Promise<any>;

/**
 * Detailed configuration for result simplification (convergence).
 */
export interface CmdArgSimplifyOptions {
  /**
   * [Single Value Simplification]
   * If there is exactly one positional argument and no named arguments, return the value directly.
   * @example parse("123") -> 123 (instead of [123])
   * @default true
   */
  singleValue?: boolean;

  /**
   * [Identical Pair Singularization]
   * If there are exactly two entries (index 0 and a named key) and their values are identical,
   * collapse them into a single value. This often happens when `idAsName` is enabled.
   * @example parse("name=John") -> "John" (instead of {0: "John", name: "John"})
   * @default true
   */
  identicalPairSingular?: boolean;

  /**
   * [Pure Positional as Array]
   * If there are multiple positional arguments and no named arguments, return a pure array.
   * @example parse("1, 2, 3") -> [1, 2, 3] (instead of {0: 1, 1: 2, 2: 3})
   * @default true
   */
  purePositionalAsArray?: boolean;

  /**
   * [Output Mode]
   * - 'auto': Apply the simplification flags above (default).
   * - 'array': Always return an array of positional args. Named args are hidden in the '.namedArgs' property.
   * - 'object': Always return a merged object with both numeric and string keys.
   * - 'map': Always return the full structure { args: [], namedArgs: {}, flags: {} }.
   * @default 'auto'
   */
  mode?: 'auto' | 'array' | 'object' | 'map';
}

/**
 * Configuration options for the CmdArgParser and main API functions.
 */
export interface CmdArgParserOptions {
  /**
   * Character used to separate arguments.
   * @example delimiter: ';' -> "arg1; arg2"
   * @default ','
   */
  delimiter?: string;
  /**
   * Character used for name-value assignment.
   * @example assigner: ':' -> "key:value"
   * @default '='
   */
  assigner?: string;
  /**
   * Prefix(es) for special parameters (Flags).
   * @example flagPrefix: '!' -> "!debug, !verbose=false"
   */
  flagPrefix?: string | string[];
  /** Custom logic to process each argument before standard evaluation */
  argProcessor?: ArgProcessor;
  /** Format used by TemplateArgProcessor (e.g., 'mustache') */
  templateFormat?: string;
  /** Additional data for template variable substitution */
  templateData?: Record<string, any>;
  /**
   * If true, the positional index of an argument that has been automatically
   * mapped as a named argument (via `idAsName`) will be excluded from the
   * merged result object.
   *
   * @example parse("John") -> {John: "John"} (instead of {0: "John", John: "John"})
   */
  excludeAutoNamedFromPositional?: boolean;
  /** If true, return the variable name as a string when it's not found in scope instead of undefined */
  preserveUnresolvedName?: boolean;
  /**
   * If true, explicitly named arguments (e.g., `k=v`) do not occupy a slot
   * in the positional `args` array.
   * @default true
   */
  namedExcludePositional?: boolean;
  /**
   * If true, a positional argument that is a valid identifier (e.g., "John")
   * is automatically mapped as a named argument (e.g., {John: "John"}).
   * @default true
   */
  idAsName?: boolean;
  /** If true, JS expressions (like arithmetic or function calls) are not evaluated */
  skipExpression?: boolean;
  /** Control the simplification of the final result. Set to `false` to disable (returns a merged object). */
  simplify?: boolean | CmdArgSimplifyOptions;
  /** If true, any parsing or evaluation error will be thrown */
  raiseError?: boolean;
  /** If true, ReferenceErrors (missing variables) will be thrown. Defaults to `raiseError`. */
  raiseReferenceError?: boolean;
  /** An object containing variables accessible to expressions in the input string */
  scope?: Record<string, any>;
  /** @internal Used to prevent infinite recursion in internal calls */
  isInternal?: boolean;
}

/**
 * Configuration for AI selection logic (used by ChoiceArgProcessor).
 *
 * @example "|item1|item2:maxPick=2"
 */
export interface CmdArgAIChoiceConfig {
  /** List of items to choose from */
  items?: string[]
  /** Maximum number of items that can be picked */
  maxPick?: number
  /** Minimum number of items that must be picked */
  minPick?: number
  /** Separator for the resulting choice string */
  separator?: string
  /** Prefix to add to the result */
  prefix?: string
  /** Suffix to add to the result */
  suffix?: string
  /** Selection strategy: 'random' for random pick, 'ai' for AI-assisted pick */
  type?: 'random'|'ai'
  /** Closing character/string for the selection UI */
  end?: string
}

/**
 * The internal structured result of the parsing process.
 */
export interface CmdArgParseResult {
  /** Positional arguments array. Indices correspond to the appearance order. */
  args: any[];
  /** Named arguments map, combining explicit `k=v`, auto-mapped IDs, and Processor results. */
  namedArgs: Record<string, any>;
  /** Special parameters (Flags) map. Values are usually Boolean but can be any type. */
  flags: CmdArgFlagsRecord;
  /** A set of numeric indices that were populated by explicitly named arguments. */
  namedIndices: Set<number>;
}

/**
 * Simplified argument result.
 * Could be a single value, an array, or an object based on CmdArgSimplifyOptions.
 */
export type SimplifiedResultType = any;

/**
 * Result structure when mode is 'map'.
 */
export interface CmdArgMapResult {
  /** Positional arguments array */
  args: any[];
  /** Named arguments map */
  namedArgs: Record<string, any>;
  /** Special parameters (Flags) map */
  flags?: CmdArgFlagsRecord;
}

/**
 * The full structure of a parsed command.
 */
export interface CmdArgParsedCommand {
  /** The command name (the identifier before the parentheses) */
  command: string;
  /** The parsed arguments, either simplified or in map format */
  args: SimplifiedResultType | CmdArgMapResult;
  /** Special parameters (Flags) map (if present) */
  flags?: CmdArgFlagsRecord;
}

/**
 * Normalized argument information, typically used for final consumption.
 */
export interface CmdArgArgsInfo {
  /** Positional arguments array */
  args: any[];
  /** Named arguments map */
  namedArgs?: Record<string, any>;
}


