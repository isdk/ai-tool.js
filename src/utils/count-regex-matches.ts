/**
 * Counts the number of matches for a given regular expression in a specified string.
 * This function ensures that the regular expression is used globally by adding the 'g' flag,
 * if it is not already present.
 *
 * @param content - The string to search within.
 * @param regex - The regular expression to use for matching.
 * @returns The total number of matches found.
 */
export function countRegexMatches(content: string, regex: RegExp): number {
  // Ensure the regular expression includes the 'g' flag for global matching
  const globalRegex = regex.global ? regex : new RegExp(regex.source, `${regex.flags}g`);

  // @ts-ignore: error TS6133
  let _match: RegExpExecArray|null;
  let count = 0;

  // Iterate through all matches using the global regular expression
  while ((_match = globalRegex.exec(content)) !== null) {
      count++;
  }

  return count;
}
