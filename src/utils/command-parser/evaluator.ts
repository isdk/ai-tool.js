import { newFunction } from "util-ex";
import { filterValidFnScope } from "../parse-js-json";
import { CmdArgParserOptions, CmdArgContext, CMD_ARG_UNRESOLVED_SYMBOL, CMD_ARG_PROCESSOR_RESULT } from "./types";
import { get as getByPath } from "lodash-es";
import { isQuoted, isIdentifier, isPathIdentifier } from "./utils";

/**
 * Evaluates the value of an argument.
 *
 * Priority:
 * 1. Attempt to call a custom processor (ArgProcessor).
 * 2. If the processor returns a source string, recursively call evaluateExpression.
 * 3. Default to evaluateExpression (handles literals, scope variables, and JS expressions).
 */
export async function cmdArgEvaluate(ctx: CmdArgContext): Promise<any> {
  const { scope, options, rawValue } = ctx;
  const { argProcessor } = options;

  // 1. Give custom ArgProcessor the first opportunity to handle the argument
  if (typeof argProcessor === 'function') {
    const result = await argProcessor(ctx);
    if (result !== undefined) {
      // A. If the processor returns a plain string, treat it as "source code for re-evaluation"
      if (typeof result === 'string') {
        return await evaluateExpression(result, scope, options);
      }

      // B. If it's a result object following the Symbol Protocol
      if (result && typeof result === 'object' && result[CMD_ARG_PROCESSOR_RESULT]) {
          const [val, name, pOptions] = result[CMD_ARG_PROCESSOR_RESULT];
          // If the wrapped value is a string, it also needs re-evaluation (e.g., template rendering result)
          if (typeof val === 'string') {
              const evaluatedVal = await evaluateExpression(val, scope, options);
              return { [CMD_ARG_PROCESSOR_RESULT]: [evaluatedVal, name, pOptions] };
          }
      }

      return result;
    }
  }

  // 2. Default evaluation logic (quoted strings, numbers, booleans, and JS expressions)
  return await evaluateExpression(rawValue, scope, options);
}

/**
 * Evaluates an expression string to its value.
 *
 * Logic sequence:
 * 1. Check if evaluation should be skipped.
 * 2. Match simple JS literals (true, false, null, undefined, NaN, Infinity).
 * 3. Check if it's a number.
 * 4. Perform path lookup in the scope (getByPath).
 * 5. Attempt execution as a JS expression or arrow function.
 * 6. Catch ReferenceError: Decide whether to fall back to raw text or return undefined based on options.
 * 7. Final fallback: Handle unquoting for quoted strings.
 */
export async function evaluateExpression(code: string, scope: any, options: CmdArgParserOptions) {
  const trimmed = code.trim();
  if (!trimmed) return undefined;

  if (options.skipExpression) {
    return trimmed;
  }

  // 1. Handle simple literals (case-insensitive)
  const lower = trimmed.toLowerCase();
  if (lower === 'true') return true;
  if (lower === 'false') return false;
  if (lower === 'null') return null;
  if (lower === 'undefined') return undefined;
  if (lower === 'nan') return NaN;
  if (lower === 'infinity') return Infinity;

  const num = Number(trimmed);
  if (!isNaN(num) && trimmed !== '') return num;

  // 2. Direct scope lookup (Path Lookup)
  if (scope && getByPath(scope, trimmed) !== undefined) {
    return getByPath(scope, trimmed);
  }

  // 3. Attempt to execute JS logic via newFunction
  try {
    const fn = newFunction('async expression', [], `return ${trimmed};`, filterValidFnScope(scope || {}));
    const result = await fn.call(null);
    // Special case: If it's a function definition, return the original function source
    if (typeof result === 'function') {
      return trimmed;
    }
    return result;
  } catch (err) {
    if (err instanceof ReferenceError) {
      if (options.raiseReferenceError ?? options.raiseError) throw err;

      if (options.preserveUnresolvedName) {
        // Return an object with a Symbol marker so the CmdArgParser can skip idAsName logic
        return { [CMD_ARG_UNRESOLVED_SYMBOL]: trimmed };
      }
      // Return undefined if it's a simple identifier or path lookup failure; otherwise, fall back to raw string
      return (isIdentifier(trimmed, options) || isPathIdentifier(trimmed)) ? undefined : trimmed;
    }

    if (options.raiseError) throw err;

    // Handle unquoting for quoted strings
    if (isQuoted(trimmed)) {
      try {
        // Safely unescape string literals using newFunction
        const unescapeFn = newFunction(`return ${trimmed};`);
        return unescapeFn();
      } catch (e) {
        // Fall back to simple substring if unescaping fails
        return trimmed.substring(1, trimmed.length - 1);
      }
    }

    // Return raw text for other unrecognizable cases
    return trimmed;
  }
}

