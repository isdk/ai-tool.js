import { Parser } from './parser';
import { Lexer } from './lexer';
import { AIChoiceConfig, PROCESSOR_RESULT, ArgContext } from './types';
import { PromptTemplate } from "../prompt";
import { omitBy } from "lodash-es";
import { isQuoted } from './utils';

/**
 * Choice argument processor (ChoiceArgProcessor).
 *
 * Syntax: |item1|item2:maxPick=2:separator=";"
 *
 * Logic:
 * 1. Identifies positional arguments starting with '|'.
 * 2. Recursively uses the Parser to parse subsequent configuration items (delimited by ':').
 * 3. Constructs an AIChoiceConfig object.
 * 4. Returns the result using the Symbol Protocol, named 'choice' and excluded from positional indexing.
 */
export async function ChoiceArgProcessor(ctx: ArgContext) {
  const { isNamed, rawValue, options } = ctx;
  if (options?.isInternal) return;

  if (!isNamed && rawValue.startsWith('|')) {
    // Recursively invoke Parser to handle configuration inside choice items
    const choiceParser = new Parser(new Lexer(rawValue, { ...options, delimiter: ':' }), { ...options, isInternal: true });
    const { args, namedArgs } = await choiceParser.parse();

    const choice: AIChoiceConfig = { ...namedArgs };
    for (const val of args) {
      if (typeof val === 'string' && val.startsWith('|')) {
        choice.items = val.split('|').filter(Boolean);
      } else if (typeof val === 'number') {
        choice.maxPick = val;
      } else if (val === 'random' || val === 'ai') {
        choice.type = val as any;
      } else if (typeof val === 'string' && val) {
        if (!choice.items) {
           choice.items = val.split('|').filter(Boolean);
        } else if (!choice.separator) {
           choice.separator = val;
        }
      }
    }

    // Return structured data using the Protocol
    return {
      [PROCESSOR_RESULT]: [choice, 'choice', { excludePositional: true }]
    };
  }
}

/**
 * Template variable processor (TemplateArgProcessor).
 *
 * Syntax: msg="Hello {{name}}"
 *
 * Logic:
 * 1. Calls PromptTemplate.formatIf for variable substitution.
 * 2. If the substitution results in a bare string (no quotes and not JS literal source),
 *    it is JSON-escaped to ensure it's recognized as a string literal in subsequent evaluation.
 * 3. Returns the substituted source string for re-evaluation by the Evaluator.
 */
export async function TemplateArgProcessor(ctx: ArgContext) {
  const { scope, options, rawValue } = ctx;
  const data = { ...omitBy(scope || {}, (v, k) => !k || k[0] === '_' || typeof v === 'function'), ...options?.templateData };
  const templateResult = await PromptTemplate.formatIf({
    template: rawValue,
    data,
    templateFormat: options?.templateFormat
  });

  if (templateResult !== undefined && templateResult !== rawValue) {
    // Result is returned as source code for re-evaluation.
    // Ensure plain text results are quoted to follow type conventions.
    const trimmedResult = typeof templateResult === 'string' ? templateResult.trim() : templateResult;
    const val = (typeof trimmedResult === 'string' && !isQuoted(trimmedResult)) ? JSON.stringify(trimmedResult) : trimmedResult;
    return {
      [PROCESSOR_RESULT]: [val]
    };
  }
}

/**
 * Combined AI processor (AIArgProcessor).
 * Sequentially attempts choice selection and template variable processing.
 */
export async function AIArgProcessor(ctx: ArgContext) {
  let result = await ChoiceArgProcessor(ctx);
  if (result === undefined) {
    result = await TemplateArgProcessor(ctx);
  }
  return result;
}

