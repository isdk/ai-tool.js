/**
 * Prepends a newline character to the beginning of the input text if it is multiline and does not already start with a newline.
 *
 * This function checks whether the provided text contains multiple lines by looking for newline characters (`\n`).
 * If the text is determined to be multiline and its first non-whitespace character is not a newline,
 * a newline character will be added at the beginning of the text.
 *
 * @param text - The input string to check and potentially modify.
 * @param indent - The number of spaces or a string to use as indentation for the each line.
 * @returns The processed string, which may have a prepended newline if conditions are met.
 *
 * @example
 * ```typescript
 * console.log(prependNewlineIfMultiline("  hello\nworld")); // Output: "\n  hello\nworld"
 * console.log(prependNewlineIfMultiline("\nhello\nworld")); // Output: "\nhello\nworld" (unchanged)
 * console.log(prependNewlineIfMultiline("single line")); // Output: "single line" (unchanged)
 * ```
 */
export function prependNewlineIfMultiline(text: string, indent?: number | string): string {
  if (typeof text === 'string') {
    if (typeof indent === 'number') {
      indent = ' '.repeat(indent);
    }
    if (typeof indent === 'string') {
      text = text.split('\n').map(line => line ? indent + line : line).join('\n');
    }

    const isMultiline = text.includes('\n');
    const startsWithNewline = /^[ \t]*\r?\n/.test(text);
    if (isMultiline && !startsWithNewline) {
      text = '\n' + text;
    }
  }


  return text;
}
