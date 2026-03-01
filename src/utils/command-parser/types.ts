/**
 * Symbol used to mark a result object returned by an ArgProcessor.
 * The processor should return an object where this Symbol is the key.
 * 
 * @example
 * ```ts
 * return {
 *   [PROCESSOR_RESULT]: [parsedValue, 'suggestedName', { excludePositional: true }]
 * };
 * ```
 */
export const PROCESSOR_RESULT = Symbol('PROCESSOR_RESULT');

/**
 * Internal Symbol used to mark values that have fallen back to their raw string 
 * representation due to a ReferenceError (undefined variable).
 * This allows the Parser to distinguish between a deliberate string "undefined" 
 * and a failed variable lookup.
 */
export const UNRESOLVED_SYMBOL = Symbol('UNRESOLVED');

/**
 * Symbol used to mark special parameters (Flags) in a wrapped object.
 * Stored as a non-enumerable property on the wrapped value (e.g., Boolean, String).
 * 
 * @example
 * ```ts
 * const flagValue = flags['debug'];
 * const prefix = flagValue[FLAG_SYMBOL]; // returns '!'
 * ```
 */
export const FLAG_SYMBOL = Symbol('flag');

/**
 * Token types for lexical analysis.
 */
export enum TokenType {
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
 * Represents a lexical token with its type, value, and source position.
 */
export interface Token {
  /** The type of the token */
  type: TokenType;
  /** The literal string value of the token */
  value: string;
  /** Starting index in the input string */
  start: number;
  /** Ending index in the input string */
  end: number;
}

/**
 * Options for processors to control how the parsed value is distributed in the final result.
 */
export interface ProcessorResultOptions {
  /** 
   * If true, the argument will be excluded from the positional `args` array.
   * Useful when a positional argument is intended to be treated as a named parameter only.
   */
  excludePositional?: boolean;
}

/**
 * Context object provided to an ArgProcessor, containing the state of the current argument.
 */
export interface ArgContext {
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
  potentialId?: string;
  /** All lexical tokens belonging to this argument */
  tokens: Token[];
  /** The 0-based index of this argument in the positional sequence */
  index: number;
  /** The evaluation scope containing variables and functions */
  scope?: Record<string, any>;
  /** The configuration options used by the Parser */
  options: ParserOptions;
  /** Reference to the Parser instance for recursive parsing */
  parser: any;
}

/**
 * Type definition for an argument processor function.
 * It can return a plain value (for standard evaluation) or a Protocol-compliant object.
 */
export type ArgProcessor = (ctx: ArgContext) => any | Promise<any>;

/**
 * Detailed configuration for result simplification (convergence).
 */
export interface SimplifyOptions {
  /** 
   * [Single Value Simplification]
   * If there is exactly one positional argument and no named arguments, return the value directly.
   * @example parse("123") -> 123 (instead of [123])
   * @default true
   */
  singleValue?: boolean;

  /** 
   * [Identical Pair Simplification]
   * If there are exactly two entries (index 0 and a named key) and their values are identical, return the value.
   * This often happens when `idAsName` is enabled.
   * @example parse("name=John") -> "John" (instead of {0: "John", name: "John"})
   * @default true
   */
  identicalPair?: boolean;

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
   * - 'array': Always return an array of positional args. Named args are hidden in the '.kvArgs' property.
   * - 'object': Always return a merged object with both numeric and string keys.
   * - 'map': Always return the full structure { args: [], kvArgs: {}, flags: {} }.
   * @default 'auto'
   */
  mode?: 'auto' | 'array' | 'object' | 'map';
}

/**
 * Configuration options for the Parser and main API functions.
 */
export interface ParserOptions {
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
  /** If true, simplification is bypassed and a merged object is returned */
  returnArrayOnly?: boolean;
  /** Format used by TemplateArgProcessor (e.g., 'mustache') */
  templateFormat?: string;
  /** Additional data for template variable substitution */
  templateData?: Record<string, any>;
  /** If true, skip positional indexing for arguments that are already explicitly named */
  ignoreIndexNamed?: boolean;
  /** If true, return the variable name as a string when it's not found in scope instead of undefined */
  preserveUnresolvedName?: boolean;
  /** 
   * If true, named arguments (k=v) do not occupy a slot in the positional `args` array.
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
  /** Control the simplification of the final result. Set to `false` to disable. */
  simplify?: boolean | SimplifyOptions;
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
export interface AIChoiceConfig {
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
export interface ParseResult {
  /** Positional arguments array. Indices correspond to the appearance order. */
  args: any[];
  /** Named arguments map, combining explicit `k=v`, auto-mapped IDs, and Processor results. */
  kvArgs: Record<string, any>;
  /** Special parameters (Flags) map. Values are usually Boolean but can be any type. */
  flags: Record<string, any>;
  /** A set of numeric indices that were populated by explicitly named arguments. */
  namedIndices: Set<number>;
}


