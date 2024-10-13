/**
 * Formats the input text by replacing delimiters with spaces and optionally capitalizing the first letter of each word.
 *
 * @param input - The input string to be formatted.
 * @param options - Optional configuration for formatting.
 * @param options.capitalize - Whether to capitalize the first letter of each word. Defaults to `true`.
 * @param options.delimiter - The delimiter used to split the words. Defaults to `/[_-]/g`.
 *
 * @example
 * // Returns "Hello World"
 * formatTextWithSpace("hello_world");
 *
 * @example
 * // Returns "This Is A Test"
 * formatTextWithSpace("this-is-a-test", { delimiter: /-/g });
 *
 * @example
 * // Returns "hello world"
 * formatTextWithSpace("hello_world", { capitalize: false });
 *
 * @example
 * // Returns "Hello World This Is A Test"
 * formatTextWithSpace("hello-world_this_is_a_test");
 */
export function formatTextWithSpace(input: string, options?: { capitalize?: boolean, delimiter?: string | RegExp }): string {
  const isCapitalizeFirstLetter = options?.capitalize ?? true
  let delimiter = options?.delimiter ?? /[_-]/g
  if (delimiter instanceof RegExp) {
    if (!delimiter.flags.includes('g')) {
      delimiter = new RegExp(delimiter.source, delimiter.flags + 'g');
    }
  }
  // Replace all '_' and '-' with ' '
  input = input.replace(delimiter, ' ');
  // Split the string into an array of words
  let words = input.split(' ').map(w => w.trim()).filter(Boolean);

  if (isCapitalizeFirstLetter) {
    // Capitalize the first letter of each word
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  }
  // Join the processed words back into a single string
  input = words.join(' ');

  return input;
}
