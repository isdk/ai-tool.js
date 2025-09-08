  /**
   * Utility to serialize an object into a URL query parameter string.
   * @param objParam The parameter object.
   * @param omitQuestionMark If true, omits the leading '?' from the result. Defaults to false.
   * @returns The URL-encoded query string or an empty string.
   */
export function genUrlParamsStr(objParam: any, omitQuestionMark?: boolean) {
  if (objParam !== undefined) {
    const objParamStr = JSON.stringify(objParam)
    if (objParamStr !== '{}' && objParamStr !== '[]' && objParamStr !== '""') {
      // not empty params
      const result = 'p=' + encodeURIComponent(objParamStr)
      return omitQuestionMark ? result : '?' + result
    }
  }
  return ''
}
