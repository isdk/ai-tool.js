const SEPARATOR = '@';
const RE_SENTENCE = /(\S.+?[.!?])(?=\s+|$)|(\S.+?)(?=[\n]|$)/g;
const AB_SENIOR = /([A-Z][a-z]{1,2}\.)\s(\w)/g;
const AB_ACRONYM = /(\.[a-zA-Z]\.)\s(\w)/g;
const UNDO_AB_SENIOR = new RegExp('([A-Z][a-z]{1,2}\\.)' + SEPARATOR + '(\\w)', 'g');
const UNDO_AB_ACRONYM = new RegExp('(\\.[a-zA-Z]\\.)' + SEPARATOR + '(\\w)', 'g');
const RE_CODE_BLOCK = /(```)([\s\S]*?)(```)/g;
const CODE_SYMBOL = '>>>CODE_BLOCK<<<';
const RE_EMPHASIS_INLINE_BLOCK = /([*_`]{1,3})(\S.*?\S)\1/;
const INLINE_SYMLBOL = '>>> INLINE_BLOCK ';
const RE_INLINE_SYMBOL = />>> INLINE_BLOCK (\d+) <<</;
const MAX_LOOP = 10000;

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
  const codeBlocks: string[] = [];
  const inlineBlocks: string[] = [];
  let match: RegExpExecArray | null;

  let c = 0

  while (c++ < MAX_LOOP && (match = RE_CODE_BLOCK.exec(text))) {
    const codeBlock = match[0];
    codeBlocks.push(codeBlock);
    text = text.replace(codeBlock, '\n' + CODE_SYMBOL + (codeBlocks.length-1) + '\n');
  }

  c = 0
  while (c++ < MAX_LOOP && (match = RE_EMPHASIS_INLINE_BLOCK.exec(text))) {
    const inlineBlock = match[0];
    inlineBlocks.push(inlineBlock);
    text = text.replace(inlineBlock, INLINE_SYMLBOL + (inlineBlocks.length-1) + ' <<<');
  }

  text = text.replace(/([。！？?])\1+/g, "$1");
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
    if (chunk.startsWith(CODE_SYMBOL)) {
      result.push(codeBlocks[Number(chunk.slice(CODE_SYMBOL.length))]);
      continue;
    }
    if (!best) {
      result.push(chunk);
      continue;
    }
    let processed = replaceWithSeparator(chunk, SEPARATOR, [AB_SENIOR, AB_ACRONYM]);
    let sents = Array.from(processed.matchAll(RE_SENTENCE));
    let sentences = [] as string[]
    if (!sents.length) {
      sentences.push(chunk)
    } else for (let j = 0; j < sents.length; j++) {
      sentences.push(replaceWithSeparator(sents[j][0], " ", [UNDO_AB_SENIOR, UNDO_AB_ACRONYM]));
    }

    result.push(...sentences.map(s => restoreInlineBlocks(inlineBlocks, s)))
  }

  if (best) {result = completeSentences(result)}
  return result;
}

export function completeSentences(sentences: string[]) {
  const result: string[] = []
  let i = 0
  let left = ''
  while (i < sentences.length) {
    let sentence = sentences[i];
    if (isSentenceEnding(sentence)) {
      if (left) {
        sentence = left + ' '+ sentence
        left = ''
      }
      result.push(sentence);
    } else {
      if (left) {
        sentence = left + ' ' + sentence
      }
      left = sentence
    }
    i++
  };

  if (left) {
    result.push(left)
  }
  return result
}

export function isSentenceEnding(text: string): boolean {
  return /(([.。!！？?]\s*['"”’]?)|```)\s*$/.test(text);
}

function restoreInlineBlocks(inlineBlocks: string[], text: string): string {
  let match: RegExpExecArray | null;
  let c = 0
  while (c++ < MAX_LOOP && (match = RE_INLINE_SYMBOL.exec(text))) {
    const ix = Number(match[1]);
    text = text.replace(match[0], inlineBlocks[ix]);
  }
  return text;
}
