//extract and modify from motdotla/dotenv-expand
// * /
// *   (\\)?            # is it escaped with a backslash?
// *   (\$)             # literal $
// *   (?!\()           # shouldnt be followed by parenthesis
// *   (\{?)            # first brace wrap opening
// *   ([\w.]+)         # key
// *   (?::-((?:\$\{(?:\$\{(?:\$\{[^}]*\}|[^}])*}|[^}])*}|[^}])+))? # optional default nested 3 times
// *   (\}?)            # last brace warp closing
// * /xi
const DOTENV_SUBSTITUTION_REGEX = /(\\)?(\$)(?!\()(\{?)([\w.]+)(?::?-((?:\$\{(?:\$\{(?:\$\{[^}]*\}|[^}])*}|[^}])*}|[^}])+))?(\}?)/gi

function _resolveEscapeSequences(value: string) {
  return value.replace(/\\\$/g, '$')
}

export function interpolateEnv(value: string, processEnv, parsed) {
  return value.replace(DOTENV_SUBSTITUTION_REGEX, (match, escaped, dollarSign, openBrace, key, defaultValue, closeBrace) => {
    if (escaped === '\\') {
      return match.slice(1)
    } else {
      if (processEnv[key]) {
        if (processEnv[key] === parsed[key]) {
          return processEnv[key]
        } else {
          // scenario: PASSWORD_EXPAND_NESTED=${PASSWORD_EXPAND}
          return interpolateEnv(processEnv[key], processEnv, parsed)
        }
      }

      if (parsed[key]) {
        // avoid recursion from EXPAND_SELF=$EXPAND_SELF
        if (parsed[key] === value) {
          return parsed[key]
        } else {
          return interpolateEnv(parsed[key], processEnv, parsed)
        }
      }

      if (defaultValue) {
        if (defaultValue.startsWith('$')) {
          return interpolateEnv(defaultValue, processEnv, parsed)
        } else {
          return defaultValue
        }
      }

      return ''
    }
  })
}

/**
 * Expand environment variables in the parsed object
 * @param options.processEnv Specify an object to write your secrets to. Defaults to `process.env` environment variables.
 * @param options.parsed Specify an object to provide the value of environment variables.
 *
 * Follows these rules to handle environment variable expansion:
 *
 * 1. Simple Variable Expansion: If a string contains `$KEY`, it will be replaced by the value of the environment variable named `KEY`.
 * 2. Braced Variable Expansion: When a string contains `${KEY}`, it also looks up the environment variable named `KEY`.
 *    This syntax is typically used to disambiguate variable names that contain special characters.
 * 3. Escaped Dollar Sign: If you want to include a literal `$` followed by a variable name, you can escape it with a backslash (`\$KEY`).
 *    This ensures the `$` character is treated as part of the literal string rather than a variable reference.
 * 4. Default Value: In the case of `${KEY:-default}` or `${KEY-default}`, the engine first tries to expand the KEY environment variable.
 *    If there's no such environment variable, it will use default as the fallback value.
 *
 * @example
 * const myEnv = {}
 * const env = {
 *   processEnv: myEnv,
 *   parsed: {
 *     WORD: 'World',
 *     HELLO: 'Hello ${WORD}'
 *   }
 * }
 * expandEnv.expand(env)
 *
 * console.log(myEnv.HELLO) // Hello World
 * console.log(process.env.HELLO) // undefined
 */
export function expandEnv(options: DotenvExpandOptions) {
  let processEnv = process.env
  if (options && options.processEnv != null) {
    processEnv = options.processEnv
  }

  for (const key in options.parsed) {
    let value: string|undefined = options.parsed[key]
    if (!value) {continue}

    const inProcessEnv = Object.prototype.hasOwnProperty.call(processEnv, key)
    if (inProcessEnv) {
      if (processEnv[key] === options.parsed[key]) {
        // assume was set to processEnv from the .env file if the values match and therefore interpolate
        value = interpolateEnv(value, processEnv, options.parsed)
      } else {
        // do not interpolate - assume processEnv had the intended value even if containing a $.
        value = processEnv[key]!
      }
    } else {
      // not inProcessEnv so assume interpolation for this .env key
      value = interpolateEnv(value, processEnv, options.parsed)
    }

    options.parsed[key] = value ? _resolveEscapeSequences(value) : value
  }

  for (const processKey in options.parsed) {
    processEnv[processKey] = options.parsed[processKey]
  }

  return options
}

/**
 * Expands environment variables in an object/array or string.
 *
 * This function replaces placeholders like `${VAR}` in strings and recursively
 * processes objects and arrays with environment variable references.
 *
 * @param obj - The object/array or string to be processed. Can be any value, but
 *              primarily designed for objects, array and strings.
 * @param options - Configuration options:
 *   - processEnv: - An object to source environment variables from, defaults to `process.env`.
 *   - parsed: - Specify an object to provide the value of environment variables.
 * @returns - Returns the expanded object or string.
 *
 * @example
 * const obj = {
 *   name: 'MyApp',
 *   envVar: '${ENV_VAR_NAME}',
 *   config: {
 *     url: 'http://${HOST}:${PORT}'
 *   },
 *   list: ['item1', '${ITEM2}']
 * };
 * // the expandedObj will have the actual values instead of placeholders.
 * const expandedObj = expandObjEnv(obj, { processEnv: myCustomEnv }); // Assuming 'ENV_VAR_NAME' is defined as 'Production' and 'HOST', 'PORT', 'ITEM2' are set,
 *
 */
export function expandObjEnv(obj: any, options: DotenvExpandOptions = {}, parsedObjs?: WeakSet<any>) {
  if (!parsedObjs) { parsedObjs = new WeakSet() }
  if (!options.processEnv) {options.processEnv = {...process.env}}
  if (!options.parsed) {options.parsed = options.processEnv as DotenvParseOutput}
  switch (typeof obj) {
    case 'string': {
      const processEnv = options.processEnv
      obj = interpolateEnv(obj, processEnv, options.parsed)
      break
    }
    case 'object': {
      if (parsedObjs.has(obj) || obj === null) { return obj }
      parsedObjs.add(obj)
      if (Array.isArray(obj)) {
        for (let i=0; i < obj.length; i++) {
          const value = obj[i]
          if (typeof value === 'string' || typeof value === 'object') {
            obj[i] = expandObjEnv(obj[i], options, parsedObjs)
          }
        }
      } else {
        for (const [key, value] of Object.entries(obj)) {
          if (typeof value === 'string' || typeof value === 'object') {
            obj[key] = expandObjEnv(value, options, parsedObjs)
          }
        }
      }
      break
    }
  }
  return obj
}

export interface DotenvPopulateInput {
  [name: string]: string|undefined;
}

export interface DotenvParseInput {
  [name: string]: string|undefined;
}

export interface DotenvParseOutput {
  [name: string]: string|undefined;
}

export interface DotenvExpandOptions {
  error?: Error;

  /**
   * Default: `process.env`
   *
   * Specify an object to write your secrets to. Defaults to process.env environment variables.
   *
   * example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`
   */
  processEnv?: DotenvPopulateInput;

  /**
   * Default: `object`
   *
   * Object coming from dotenv's parsed result.
   */
  parsed?: DotenvParseInput;
}

export interface DotenvExpandOutput {
  error?: Error;
  parsed?: DotenvParseOutput;
}