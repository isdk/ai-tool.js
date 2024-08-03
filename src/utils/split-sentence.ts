const SEPARATOR = '@';
const RE_SENTENCE = /(\S.+?[.!?])(?=\s+|$)|(\S.+?)(?=[\n]|$)/g;
const AB_SENIOR = /([A-Z][a-z]{1,2}\.)\s(\w)/g;
const AB_ACRONYM = /(\.[a-zA-Z]\.)\s(\w)/g;
const UNDO_AB_SENIOR = new RegExp('([A-Z][a-z]{1,2}\\.)' + SEPARATOR + '(\\w)', 'g');
const UNDO_AB_ACRONYM = new RegExp('(\\.[a-zA-Z]\\.)' + SEPARATOR + '(\\w)', 'g');

function replaceWithSeparator(text: string, separator: string, regexs: RegExp[]): string {
  const replacement = "$1" + separator + "$2";
  let result = text;
  for (let i = 0; i < regexs.length; i++) {
      result = result.replace(regexs[i], replacement);
  }
  return result;
}

/**
 * Splits a text into sentences.
 * This function is used to split a text into separate sentences, based on punctuation marks such as '.', '?', or '!' and other rules.
 * @param {string} text - The input string that needs to be split into sentences.
 * @param {boolean} best - A boolean flag indicating if the function should use the best possible sentence splitting method (default is true).
 * If set to false, it will not perform any additional processing and simply split on newline characters ('\n').
 * @returns {string[]} An array of strings where each string represents a sentence in the input text.
 *
 * Example:
 * const text = "Hello world! How are you today? I am fine.";
 * console.log(splitSentence(text));  // returns ['Hello world!', 'How are you today?', 'I am fine.']
 */
export function splitSentence(text: string, best: boolean = true): string[] {
  text = text.replace(/([。！？?])([^”’])/g, "$1\n$2");
  text = text.replace(/(\.{6})([^”’])/g, "$1\n$2");
  text = text.replace(/(…{2})([^”’])/g, "$1\n$2");
  text = text.replace(/([。！？?][”’])([^，。！？?])/g, "$1\n$2");
  const chunks = text.split("\n");
  let result: string[] = [];
  for (let i = 0; i < chunks.length; i++) {
    let chunk = chunks[i].trim();
    if (!chunk) {
      continue;
    }
    if (!best) {
      result.push(chunk);
      continue;
    }
    let processed = replaceWithSeparator(chunk, SEPARATOR, [AB_SENIOR, AB_ACRONYM]);
    let sents = Array.from(processed.matchAll(RE_SENTENCE));
    if (!sents.length) {
      result.push(chunk);
      continue;
    }
    for (let j = 0; j < sents.length; j++) {
      let sentence = replaceWithSeparator(sents[j][0], " ", [UNDO_AB_SENIOR, UNDO_AB_ACRONYM]);
      result.push(sentence);
    }
  }
  return result;
}
