import { isTitleString, SplitSentenceOptions } from "./split-sentence"

/**
 * Splits the input string into paragraphs based on empty lines and title lines.
 * Each paragraph is represented as an array of strings, where each string is a line in the paragraph.
 *
 * @param value - The input string to be split into paragraphs.
 * @param options - Optional configuration options for splitting the string.
 * @param options.isMarkdown - If true, it's markdown format string.
 * @returns A two-dimensional array where each sub-array represents a paragraph.
 */
export function splitParagraph(value: string, options?: SplitSentenceOptions) {
  // const ignoreEmptyLine = !options?.isMarkdown && options?.ignoreEmptyLine
  const result: string[][] = []
  const paragraph: string[] = []
  // if (ignoreEmptyLine) {value = value.replace(/\n(\s*\n)+/g, '\n\n')}
  const lines = value.split('\n')
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i]
    const isEmptyLine = line.trim().length === 0
    // console.log('🚀 ~ splitParagraph ~ isEmptyLine:', line, isEmptyLine)
    if (isEmptyLine || isTitleString(line, {...options, nextLine: lines[i + 1]})) {
      if (paragraph.length) {
        result.push([...paragraph])
      }

      paragraph.length = 0
      if (!isEmptyLine) paragraph.push(line)
    } else {
      paragraph.push(line)
    }
  }
  if (paragraph.length) {
    result.push([...paragraph])
  }
  return result
}
