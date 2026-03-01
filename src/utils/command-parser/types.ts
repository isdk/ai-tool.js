/**
 * 用于标记处理器 (Processor) 返回的结果对象。
 * 格式应为：{ [PROCESSOR_RESULT]: [value, name?, options?] }
 */
export const PROCESSOR_RESULT = Symbol('PROCESSOR_RESULT');

/**
 * 内部 Symbol，用于标记因变量未定义 (ReferenceError) 而回退为原始字符串的值。
 */
export const UNRESOLVED_SYMBOL = Symbol('UNRESOLVED');

/**
 * 词法标记类型
 */
export enum TokenType {
  EOF = 'EOF',
  COMMA = 'COMMA',           // 分隔符 (默认 ,)
  ASSIGN = 'ASSIGN',         // 赋值符 (默认 = 或 :)
  L_PAREN = 'L_PAREN',       // (
  R_PAREN = 'R_PAREN',       // )
  L_BRACKET = 'L_BRACKET',   // [
  R_BRACKET = 'R_BRACKET',   // ]
  L_BRACE = 'L_BRACE',       // {
  R_BRACE = 'R_BRACE',       // }
  STRING = 'STRING',         // 引号字符串 "..." 或 '...'
  IDENTIFIER = 'IDENTIFIER', // 标识符 (保留字除外)
  RAW = 'RAW',               // 原始文本 (用于表达式、模板或未识别文本)
}

/**
 * 词法标记
 */
export interface Token {
  type: TokenType;
  value: string;
  start: number;
  end: number;
}

/**
 * 处理器选项，用于控制参数的分发行为
 */
export interface ProcessorResultOptions {
  /** 
   * 如果为 true，该参数将不出现在位置参数数组 (args) 中，且不占用索引位。
   * 常用于将位置参数“转化”为纯命名参数（如 choice）。
   */
  excludePositional?: boolean;
}

/**
 * 传递给参数处理器 (ArgProcessor) 的上下文对象
 */
export interface ArgContext {
  /** 是否为显式命名参数 (k=v) */
  isNamed: boolean;
  /** 原始文本字符串 */
  rawValue: string;
  /** 显式指定的名称 (k) */
  name?: string;
  /** 如果是位置参数且符合标识符格式，则为标识符名称 */
  potentialId?: string;
  /** 当前参数包含的所有词法标记 */
  tokens: Token[];
  /** 当前参数在位置参数序列中的索引 */
  index: number;
  /** 评估作用域 */
  scope?: Record<string, any>;
  /** 解析配置选项 */
  options: ParserOptions;
  /** Parser 实例 */
  parser: any;
}

/**
 * 参数处理器函数定义。
 * 处理器可以根据上下文返回解析后的值，或返回带 Symbol 协议的对象以控制分发逻辑。
 */
export type ArgProcessor = (ctx: ArgContext) => any | Promise<any>;

/**
 * 解析器配置选项
 */
export interface ParserOptions {
  /** 参数分隔符，默认 ',' */
  delimiter?: string;
  /** 赋值操作符，默认 '=' */
  assigner?: string;
  /** 自定义参数处理器 */
  argProcessor?: ArgProcessor;
  /** 是否仅返回合并后的对象（包含数字索引键） */
  returnArrayOnly?: boolean;
  /** 模板格式 */
  templateFormat?: string;
  /** 模板数据 */
  templateData?: Record<string, any>;
  /** 是否忽略已经被命名的位置参数索引，默认 false */
  ignoreIndexNamed?: boolean;
  /** 当 JS 变量未定义时，是否将其原样作为字符串返回，默认 false */
  preserveUnresolvedName?: boolean;
  /** 显式命名参数 (k=v) 是否排除在位置索引外，默认 true */
  namedExcludePositional?: boolean;
  /** 位置参数如果是一个标识符且未解析失败，是否自动作为同名的名称参数映射，默认 true */
  idAsName?: boolean;
  /** 是否跳过 JS 表达式评估，仅返回原始文本 */
  skipExpression?: boolean;
  /** 是否开启结果简化逻辑（单参数时直接返回值而非数组/对象），默认 true */
  simplify?: boolean;
  /** 遇到错误时是否抛出异常 */
  raiseError?: boolean;
  /** 评估作用域 */
  scope?: Record<string, any>;
  /** 内部递归标记 */
  isInternal?: boolean;
}

/**
 * AI 选择配置结构 (用于 ChoiceArgProcessor)
 */
export interface AIChoiceConfig {
  items?: string[]
  maxPick?: number
  minPick?: number
  separator?: string
  prefix?: string
  suffix?: string
  type?: 'random'|'ai'
  end?: string
}

/**
 * 原始解析结果
 */
export interface ParseResult {
  /** 位置参数数组 (按出现顺序，可能会有 hole) */
  args: any[];
  /** 命名参数键值对（包含显式命名、Processor 命名和自动标识符映射） */
  kvArgs: Record<string, any>;
  /** 已经被命名的位置参数索引集合（用于 ignoreIndexNamed 逻辑） */
  namedIndices: Set<number>;
}
