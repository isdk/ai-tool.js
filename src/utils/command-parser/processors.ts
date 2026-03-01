import { Parser } from './parser';
import { Lexer } from './lexer';
import { AIChoiceConfig, PROCESSOR_RESULT, ArgContext } from './types';
import { PromptTemplate } from "../prompt";
import { omitBy } from "lodash-es";
import { isQuoted } from './utils';

/**
 * 选项选择处理器 (ChoiceArgProcessor)。
 *
 * 语法：|项1|项2:maxPick=2:separator=";"
 *
 * 逻辑：
 * 1. 识别以 | 开头的位置参数。
 * 2. 递归使用 Parser 解析后续的配置项（以 : 为分隔符）。
 * 3. 构造 AIChoiceConfig 对象。
 * 4. 返回带 Symbol 协议的结果，命名为 'choice' 且排除在位置索引外。
 */
export async function ChoiceArgProcessor(ctx: ArgContext) {
  const { isNamed, rawValue, options } = ctx;
  if (options?.isInternal) return;

  if (!isNamed && rawValue.startsWith('|')) {
    // 递归调用 Parser 处理选择项内部的配置
    const choiceParser = new Parser(new Lexer(rawValue, { ...options, delimiter: ':' }), { ...options, isInternal: true });
    const { args, kvArgs } = await choiceParser.parse();

    const choice: AIChoiceConfig = { ...kvArgs };
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

    // 使用协议返回结构化数据
    return {
      [PROCESSOR_RESULT]: [choice, 'choice', { excludePositional: true }]
    };
  }
}

/**
 * 模板变量处理器 (TemplateArgProcessor)。
 *
 * 语法：msg="Hello {{name}}"
 *
 * 逻辑：
 * 1. 调用 PromptTemplate.formatIf 进行变量替换。
 * 2. 如果替换后的结果是裸字符串（不带引号且非 JS 类型源码），则对其进行 JSON.stringify 转义，
 *    以确保其在后续的评估步骤中被正确识别为字符串字面量。
 * 3. 返回替换后的源码字符串，供 Evaluator 二次评估。
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
    // 渲染结果作为源码返回。
    // 如果渲染结果是纯文本字符串且不带引号，则为其补上引号以遵循类型约定。
    const trimmedResult = typeof templateResult === 'string' ? templateResult.trim() : templateResult;
    const val = (typeof trimmedResult === 'string' && !isQuoted(trimmedResult)) ? JSON.stringify(trimmedResult) : trimmedResult;
    return {
      [PROCESSOR_RESULT]: [val]
    };
  }
}

/**
 * 组合 AI 处理器 (AIArgProcessor)。
 * 依次尝试选项选择和模板变量处理。
 */
export async function AIArgProcessor(ctx: ArgContext) {
  let result = await ChoiceArgProcessor(ctx);
  if (result === undefined) {
    result = await TemplateArgProcessor(ctx);
  }
  return result;
}
