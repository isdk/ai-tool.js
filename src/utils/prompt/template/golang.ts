// the golang text/template implementation
// It's quick and ugly implementation, need to refactor
import { getValueByPath } from './util';

/**
 * Replaces re_replace expressions in the given template string with the result of applying a regular expression replacement on the specified variable's value.
 *
 * @param template The template string containing the re_replace expression to be replaced.
 * @param variables An object containing values for the variables referenced in the template, including the variable used in the re_replace expression.
 * @param initVars If true, initializes undefined variables in the `variables` object with `null` instead of replacing them. Defaults to false.
 * @returns The template string with the re_replace expression replaced by the result of the regular expression replacement.
 *
 * @example Regular re_replace replacement
* const template = "Original text: {{.text}}, Replaced text: {{re_replace .text 'apple' 'orange'}}";
* const variables = { text: 'An apple a day keeps the doctor away.' };
* const result = reReplace(template, variables);
* console.log(result); // Output: "Original text: An apple a day keeps the doctor away., Replaced text: An orange a day keeps the doctor away."
*
* @example Variable initialization (initVars = true)
* const template = "Replaced text: {{re_replace .text 'apple' 'orange'}}";
* const variablesWithInit = {};
* const resultWithInit = reReplace(template, variablesWithInit, true);
* console.log(resultWithInit); // Output: "Replaced text: {{re_replace .text 'apple' 'orange'}}"
* console.log(variablesWithInit); // Output: { text: null }
*/
function reReplace(template: string, variables: Record<string, any>, initVars?: boolean): string {
  const regex = /{{\s*re_replace\s+\.(.+?)\s+(["'])([^\2]*?)\2\s+(["'])([^\4]*?)\4\s*}}/g;

  return template.replace(regex, (match, prop, _regDelimiter, regexp, _newValueDelimiter, newValue) => {
    if (initVars) {
      variables[prop] = null;
      return match;
    }

    const replaceRegex = new RegExp(regexp, 'g');
    const input: string = getValueByPath(variables, prop);
    const expanded = input.replace(replaceRegex, newValue);

    return expanded;
  });
}

/**
 * Replaces join expressions in the given template string with the joined values from the specified array in the variables object.
 *
 * @param template The template string containing the join expression to be replaced.
 * @param variables An object containing values for the variables referenced in the template, including the array used in the join expression.
 * @param initVars If true, initializes undefined variables in the `variables` object with `null` instead of replacing them. Defaults to false.
 * @returns The template string with the join expression replaced by the joined array values.
 *
 * @example <caption>Regular join replacement</caption>
* const template = `Colors: {{join .colors ", "}}`;
* const variables = { colors: ['Red', 'Green', 'Blue'] };
* const result = joinReplace(template, variables);
* console.log(result); // Output: "Colors: Red, Green, Blue"
*
* @example <caption>Variable initialization (initVars = true)</caption>
* const template = `Colors: {{join .colors ", "}}`;
* const variablesWithInit = {};
* const resultWithInit = joinReplace(template, variablesWithInit, true);
* console.log(resultWithInit); // Output: "Colors: {{join .colors ", "}}"
* console.log(variablesWithInit); // Output: { colors: null }
*/
function joinReplace(template: string, variables: Record<string, any>, initVars?: boolean): string {
  const regex = /{{\s*join\s+\.(.+?)\s+(["'])([^\2]*?)\2\s*}}/g;
  return template.replace(regex, (match, prop, _quote, delimiter) => {
    if (initVars) {
      variables[prop] = null;
      return match;
    }

    const input: string[] = getValueByPath(variables, prop);
    const expanded = input.join(delimiter);

    return expanded;
  });
}

/**
 * Replaces if-else expressions in the given template string with the corresponding true or false branch based on the evaluated conditions.
 * Also supports if expressions without an else clause.
 *
 * @param template The template string containing if-else or if expressions to be replaced.
 * @param variables An object containing values for the variables referenced in the template, including those used in the if-else conditions.
 * @param initVars If true, initializes undefined variables in the `variables` object with `null` instead of replacing them. Defaults to false.
 * @returns The template string with if-else or if expressions replaced by the appropriate branch based on the evaluated conditions.
 *
 * @example Regular if-else replacement
 * const template = "Is color defined? {{if .color}}Yes{{else}}No{{end}}";
 * const variables = { color: 'Red' };
 * const result = ifElseReplace(template, variables);
 * console.log(result); // Output: "Is color defined? Yes"
 *
 * @example If expression without else
 * const template = "Is color defined? {{if .color}}Yes{{end}}";
 * const variables = { color: 'Red' };
 * const result = ifElseReplace(template, variables);
 * console.log(result); // Output: "Is color defined? Yes"
 *
 * @example Variable initialization (initVars = true)
 * const template = "Is color defined? {{if .color}}Yes{{else}}No{{end}}";
 * const variablesWithInit = {};
 * const resultWithInit = ifElseReplace(template, variablesWithInit, true);
 * console.log(resultWithInit); // Output: "Is color defined? No"
 * console.log(variablesWithInit); // Output: { color: null }
 */
function ifElseReplace(template: string, variables: Record<string, any>, initVars?: boolean): string {
  const regex = /{{\s*if\s*(\S+?)\s*}}([^{]*)({{\s*else\s*}}([^{]*))?{{\s*end\s*}}/g;

  return template.replace(regex, (match, condition, onTrue, _elseMarker, onFalse) => {
    if (initVars) {
      if (condition.startsWith('.')) {condition = condition.substring(1)}
      variables[condition] = null;
      return match;
    }

    let conditionResult: string;
    if (condition.startsWith('.')) {
      const value = getValueByPath(variables, condition.substring(1));
      if (value === null || value === undefined) {
        conditionResult = onFalse ?? '';
      } else if (typeof value === 'string') {
        conditionResult = value.length > 0 ? onTrue : onFalse ?? '';
      } else if (Array.isArray(value)) {
        conditionResult = value.length > 0 ? onTrue : onFalse ?? '';
      } else if (typeof value === 'boolean') {
        conditionResult = value ? onTrue : onFalse ?? '';
      } else {
        throw new Error(`Unexpected type for variable ${condition}: ${typeof value}`);
      }
    } else {
      throw new Error('Functionality not implemented');
    }

    return conditionResult;
  });
}

/**
 * Replaces a range expression in the given template string with the values from the specified array in the variables object.
 *
 * @param template The template string containing the range expression to be replaced.
 * @param variables An object containing values for the variables referenced in the template, including the array used in the range expression.
 * @param initVars If true, initializes undefined variables in the `variables` object with `null` instead of replacing them. Defaults to false.
 * @returns The template string with the range expression replaced by the expanded array values.
 *
 * @example Regular range replacement
* const template = "Colors: \n{{range .colors}}This is {{.}} color.\n{{end}}";
* const variables = { colors: ['Red', 'Green', 'Blue'] };
* const result = rangeReplace(template, variables);
* console.log(result); // Output: "Colors: \nThis is Red color.\nThis is Green color.\nThis is Blue color.\n"
*
* @example Variable initialization (initVars = true)
* const template = "Colors: {{range .colors}}{{.}}{{end}}";
* const variablesWithInit = {};
* const resultWithInit = rangeReplace(template, variablesWithInit, true);
* console.log(resultWithInit); // Output: "Colors: {{range .colors}}{{.}}{{end}}"
* console.log(variablesWithInit); // Output: { colors: null }
*/
function rangeReplace(template: string, variables: Record<string, any>, initVars?: boolean): string {
  const regex = /{{\s*range\s*[.$]([^{}\s]+?)\s*}}([^{]*?){{\.}}([^{]*?){{\s*end\s*}}/g;

  return template.replace(regex, (match, prop, prefix, postfix) => {
    if (initVars) {
      variables[prop] = null;
      return match;
    }

    const arr = getValueByPath(variables, prop);
    if (Array.isArray(arr)) {
      let expanded = '';
      for (const value of arr as string[]) {
        expanded += `${prefix}${value}${postfix}`;
      }
      return expanded;
    }

    return match;
  });
}

/**
 * Replaces variables in the given template string using the provided variables object.
 *
 * @param template The template string in which variables are to be replaced.
 * @param variables An object containing values for the variables present in the template.
 * @param initVars If true, initializes undefined variables in the `variables` object with `null` instead of replacing them. Defaults to false.
 * @returns The template string with variables replaced.
 *
 * @example Regular variable replacement
 * const template = "Hello, {{.name}}! Today is {{.date}}.";
 * const variables = { name: "Alice", date: "April 5th" };
 * const result1 = variableReplace(template, variables);
 * console.log(result1); // Output: "Hello, Alice! Today is April 5th."
 *
 * @example Variable initialization (initVars = true)
 * const template = "Hello, {{.name}}! Today is {{.date}}.";
 * const variablesWithInit = {};
 * const result2 = variableReplace(template, variablesWithInit, true);
 * console.log(result2); // Output: "Hello, {{.name}}! Today is {{.date}}."
 * console.log(variablesWithInit); // Output: { name: null, date: null }
 *
 */
function variableReplace(template: string, variables: Record<string, any>, initVars?: boolean): string {
  const regex = /{{\s*\.([^{}\s]+?)\s*}}/g;

  return template.replace(regex, (match, key) => {
    if (initVars) {
      variables[key] = null;
      return match
    }
    return getValueByPath(variables, key) || '';
  });
}

/**
 * Replaces variables in the given string using indexed properties from the provided variables object.
 *
 * @param template The string in which indexed variables are to be replaced.
 * @param variables An object containing values for the indexed variables present in the string.
 * @param initVars If true, initializes undefined variables in the `variables` object with `null` instead of replacing them. Defaults to false.
 * @returns The string with indexed variables replaced.
 *
 * @example Regular variable replacement
* const str = "The item at index {{index .someArray 0}} is {{index .someObject 'key'}}.";
* const variables = {
*   someArray: ['apple', 'banana'],
*   someObject: { key: 'orange' },
* };
* const result = indexReplace(str, variables);
* console.log(result); // Output: "The item at index apple is orange."
*
* @example Variable initialization (initVars = true)
* const str = "The item at index {{index.someArray.0}} is {{index.someObject.'key'}}.";
* const variablesWithInit = {};
* const resultWithInit = indexReplace(str, variablesWithInit, true);
* console.log(resultWithInit); // Output: "The item at index {{index.someArray.0}} is {{index.someObject.'key'}}."
* console.log(variablesWithInit); // Output: { someArray: null, someObject: null }
*/
function indexReplace(template: string, variables: Record<string, any>, initVars?: boolean): string {
  const regex = /{{\s*index\s*\.(.+?)\s+(.+?)\s*}}/g;

  return template.replace(regex, (match, prop, index) => {
    if (initVars) {
      variables[prop] = null;
      return match;
    }

    const top = getValueByPath(variables, prop);

    let value;
    if (!isNaN(index)) {
      value = top[parseInt(index, 10)];
    } else {
      // Assuming the non-numeric index is wrapped in quotes (e.g., "key")
      const quotedIndex = index.substring(1, index.length - 1);
      value = top[quotedIndex];
    }

    return value || '';
  });
}

/**
 * Parse and interpolate template
 * @param str golang style template
 * @param variables object of variables to insert
 */
export function interpolateGolangTemplate(str: string, variables: Record<string, any>, initVars?: boolean): string {
  let result = reReplace(str, variables, initVars);
  result = joinReplace(result, variables, initVars);
  result = ifElseReplace(result, variables, initVars);
  result = rangeReplace(result, variables, initVars);
  result = variableReplace(result, variables, initVars);
  result = indexReplace(result, variables, initVars);
  return result;
}
