/**
 * Splits a string into words using splitWords rules, then joins them with a separator
 *
 * This is a convenience function that combines word splitting and joining operations.
 * It's useful for converting camelCase, PascalCase, or mixed-alphanumeric strings
 * into human-readable formats with custom separators.
 *
 * @param input - The string to process
 * @param separator - The separator to use when joining words (default: space)
 * @returns The input string with words separated by the specified delimiter
 *
 * @example
 * joinSplitWords("HelloWorld")            // Returns "Hello World"
 * joinSplitWords("item1label21Good", "-") // Returns "item1-label21-Good"
 * joinSplitWords("HTTPRequest", "_")      // Returns "HTTP_Request"
 * joinSplitWords("Good morning", "-")          // Returns "Good-morning"
 */
export function joinSplitWords(input: string, separator: string = ' '): string {
  const parts = splitWords(input);
  return parts.join(separator);
}

/**
 * Splits a string into an array of words based on case changes, digit boundaries, and spaces.
 *
 * This function identifies word boundaries using the following rules:
 * 1. Between a lowercase letter followed by an uppercase letter (camelCase)
 * 2. Between a digit and a letter (alphanumeric boundaries)
 * 3. Between consecutive uppercase letters when followed by a lowercase letter (acronyms)
 * 4. At whitespace characters
 *
 * @param input - The string to be split into words
 * @returns An array of words extracted from the input string
 *
 * @example
 * splitWords("HelloWorld")     // Returns ["Hello", "World"]
 * splitWords("item1label21Good") // Returns ["item1", "label21", "Good"]
 * splitWords("HTTPRequest")    // Returns ["HTTP", "Request"]
 * splitWords("Good morning")   // Returns ["Good", "morning"]
 */
export function splitWords(input: string): string[] {
    // 使用正则表达式匹配单词边界：
    // 1. 小写字母后跟大写字母 (如: oW -> "o" 和 "W")
    // 2. 数字后跟字母 (如: 1G -> "1" 和 "G")
    // 3. 大写字母后跟大写字母+小写字母 (如: PRe -> "P" 和 "R"，其中 R 后跟小写字母)
    // 4. 空格或下划线分隔符
    return input
        .split(/(?<=[a-z])(?=[A-Z])|(?<=\d)(?=[A-Za-z])|(?<=[A-Z])(?=[A-Z][a-z])|[\s_]+/g)
        .filter(word => word.length > 0);
}
