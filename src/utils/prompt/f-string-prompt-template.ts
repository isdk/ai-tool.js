import { CommonError, ErrorCode } from "../base-error";
import { PromptTemplate, type PromptTemplateOptions } from "./prompt-template";

export class FStringPromptTemplate extends PromptTemplate {
  declare compiledTemplate: FStringPromptTemplateNode[]

  getVariables(template: FStringPromptTemplateNode[] = this.compiledTemplate) {
    const result = new Set<string>()
    template.forEach((node) => {
      if (node.type === "variable") {
        result.add(node.name);
      }
    });
    return [...result]
  }

  _initialize(options?: PromptTemplateOptions) {
    const template = options?.template
    if (typeof template !== 'string') {
      throw new CommonError('Prompt template must be a string', 'PromptTemplate', ErrorCode.InvalidArgument)
    }
    this.compiledTemplate = parseFString(template)
    this.inputVariables = Array.isArray(options?.inputVariables) ? options.inputVariables : this.getVariables()
  }

  _format(data: Record<string, any>): string {
    return interpolateFString(this.compiledTemplate, data)
  }

}

/**
 * Type that represents a node in a parsed format string. It can be either
 * a literal text or a variable name.
 */
export type FStringPromptTemplateNode =
  | { type: "literal"; text: string }
  | { type: "variable"; name: string };

/**
 * Type that represents a function that takes a template string and
 * returns an array of `ParsedFStringNode`.
 *
 * extract from langchain.js/langchain-core/src/prompts/template.ts
 */
function parseFString(template: string): FStringPromptTemplateNode[] {
  // Core logic replicated from internals of pythons built in Formatter class.
  // https://github.com/python/cpython/blob/135ec7cefbaffd516b77362ad2b2ad1025af462e/Objects/stringlib/unicode_format.h#L700-L706
  const chars = template.split("");
  const nodes: FStringPromptTemplateNode[] = [];

  const nextBracket = (bracket: "}" | "{" | "{}", start: number) => {
    for (let i = start; i < chars.length; i += 1) {
      if (bracket.includes(chars[i])) {
        return i;
      }
    }
    return -1;
  };

  let i = 0;
  while (i < chars.length) {
    if (chars[i] === "{" && i + 1 < chars.length && chars[i + 1] === "{") {
      nodes.push({ type: "literal", text: "{" });
      i += 2;
    } else if (
      chars[i] === "}" &&
      i + 1 < chars.length &&
      chars[i + 1] === "}"
    ) {
      nodes.push({ type: "literal", text: "}" });
      i += 2;
    } else if (chars[i] === "{") {
      const j = nextBracket("}", i);
      if (j < 0) {
        throw new Error("Unclosed '{' in template.");
      }

      nodes.push({
        type: "variable",
        name: chars.slice(i + 1, j).join(""),
      });
      i = j + 1;
    } else if (chars[i] === "}") {
      throw new Error("Single '}' in template.");
    } else {
      const next = nextBracket("{}", i);
      const text = (next < 0 ? chars.slice(i) : chars.slice(i, next)).join("");
      nodes.push({ type: "literal", text });
      i = next < 0 ? chars.length : next;
    }
  }
  return nodes;
};

/**
 * Type that represents a function that takes a template string and a set
 * of input values, and returns a string where all variables in the
 * template have been replaced with their corresponding values.
 */
function interpolateFString(nodes: FStringPromptTemplateNode[], values: Record<string, any>) {
  return nodes.reduce((res, node) => {
    let result: string
    if (node.type === "variable") {
      if (node.name in values) {
        result = res + values[node.name];
      } else {
        // console.error(`Missing value for input ${node.name}`);
        result = res;
      }
    } else {
      result = res + node.text;
    }
    return result;
  }, "");
}

PromptTemplate.register(FStringPromptTemplate,{name: 'fstring', aliases: ['f-string', 'langchain']})