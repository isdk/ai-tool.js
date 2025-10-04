import {
  StringTemplate as PromptTemplate,
  EnvStringTemplate as EnvPromptTemplate, FStringTemplate as FStringPromptTemplate, GolangStringTemplate as GolangPromptTemplate,
  expandEnv, expandObjEnv, defaultTemplateFormat, getEnvVairables,
  createHfValueFunc,
  // HFTemplate,
} from '@isdk/template-engines'

export {
  PromptTemplate,
  EnvPromptTemplate, FStringPromptTemplate, GolangPromptTemplate,
  expandEnv, expandObjEnv, defaultTemplateFormat, getEnvVairables,
  createHfValueFunc,
}
export type {StringTemplateOptions as PromptTemplateOptions} from '@isdk/template-engines'

/*
HFTemplate.global.set('content_textify', (v: any) => {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (Array.isArray(v)) {
    // 取所有 type='text' 的片段拼接，兼容多段文本
    return v .filter(p => p && typeof p === 'object' && p.type === 'text' && typeof p.text === 'string') .map(p => p.text) .join('');
  }
  if (typeof v === 'object') {
    if (typeof (v as any).text === 'string') return (v as any).text;
    if (typeof (v as any).content === 'string') return (v as any).content;
  }
  return '';
})
*/
