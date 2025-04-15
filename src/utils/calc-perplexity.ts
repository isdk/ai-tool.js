export interface ProbabilityItem {
  id?: number;
  token: string;
  probability: number;
}

interface CalcPerplexityExcludeOptions {
  controlSymbols?: boolean;
  punctuation?: boolean;
  whitespace?: boolean;
  stopWords?: boolean;
  tokens?: string[];
}

interface CalcPerplexityOptions {
  exclude?: CalcPerplexityExcludeOptions;
}

const DEFAULT_CONTROL_SYMBOLS = ['<BOS>', '<EOS>', '<PAD>', '<UNK>'];
const DEFAULT_PUNCTUATION = '.,!?;？！';
const DEFAULT_WHITESPACE =  [' ', '\n', '\t', '▁', ' '];
const DEFAULT_STOP_WORDS =  ['the', 'a', 'an', '的', '是', '在'];

function getExcludeTokens(options: CalcPerplexityExcludeOptions) {
  const excludeTokens = new Set<string>;

  if (options.controlSymbols) {
    DEFAULT_CONTROL_SYMBOLS.forEach(v => excludeTokens.add(v))
  }

  if (options.punctuation) {
    for (let i =0; i<DEFAULT_PUNCTUATION.length; i++) {
      excludeTokens.add(DEFAULT_PUNCTUATION[i])
    }
  }

  if (options.stopWords) {
    DEFAULT_STOP_WORDS.forEach(v => excludeTokens.add(v))
  }

  if (options.whitespace) {
    DEFAULT_WHITESPACE.forEach(v => excludeTokens.add(v))
  }

  if (Array.isArray(options.tokens)) {
    options.tokens.forEach(v => excludeTokens.add(v))
  }

  return [...excludeTokens];
}

/**
 * Calculates the perplexity of a given list of probability items.
 * Perplexity is a measurement used in natural language processing (NLP)
 * to evaluate the quality of a language model. Lower perplexity indicates
 * better predictions made by the model.
 *
 * @param probabilities - An array of `ProbabilityItem` objects, each containing
 *                        a token and its associated probability.
 * @param options - Optional configuration for excluding specific types of tokens
 *                  from the calculation.
 * @returns The calculated perplexity value as a number.
 *
 * @example
 * ```typescript
 * const probabilities = [
 *   { token: "hello", probability: 0.1 },
 *   { token: "world", probability: 0.05 },
 *   { token: "<EOS>", probability: 0.02 },
 *   { token: ",", probability: 0.01 }
 * ];
 *
 * // Exclude control symbols and punctuation from the calculation
 * const options = {
 *   exclude: {
 *     controlSymbols: true,
 *     punctuation: true
 *   }
 * };
 *
 * const perplexity = calcPerplexity(probabilities, options);
 * console.log(perplexity); // Outputs the calculated perplexity value
 * ```
 */
export function calcPerplexity(probabilities: ProbabilityItem[], options?: CalcPerplexityOptions) {
  const excludeTokens = options?.exclude ? getExcludeTokens(options.exclude) : undefined
  if (excludeTokens && excludeTokens.length) {
    probabilities = probabilities.filter(v => !excludeTokens.includes(v.token.trim()))
  }

  return calcPerplexitySimple(probabilities)
}

/**
 * A simplified version of the perplexity calculation function.
 * This function directly calculates the perplexity from an array
 * of `ProbabilityItem` objects without any token exclusion options.
 *
 * @param probabilities - An array of `ProbabilityItem` objects, each containing
 *                        a token and its associated probability.
 * @returns The calculated perplexity value as a number.
 *
 * @example
* ```typescript
* const probabilities = [
*   { token: "hello", probability: 0.1 },
*   { token: "world", probability: 0.05 }
* ];
*
* const perplexity = calcPerplexitySimple(probabilities);
* console.log(perplexity); // Outputs the calculated perplexity value
* ```
*/
export function calcPerplexitySimple(probabilities: ProbabilityItem[]) {
  if (!Array.isArray(probabilities) || probabilities.length === 0) {return}
  const totalProbability = probabilities.reduce((acc, item) => acc + item.probability, 0);
  const perplexity = Math.exp(-totalProbability / probabilities.length);
  return perplexity;
}
