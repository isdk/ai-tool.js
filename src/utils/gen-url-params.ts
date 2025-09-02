  /**
   * Utility to serialize an object into a URL query parameter string.
   * @param {any} objParam - The parameter object.
   * @returns {string} The URL-encoded query string or an empty string.
   */
export function genUrlParamsStr(objParam: any) {
  if (objParam !== undefined) {
    const objParamStr = JSON.stringify(objParam)
    if (objParamStr !== '{}' && objParamStr !== '[]' && objParamStr !== '""') {
      // not empty params
      return '?p=' + encodeURIComponent(objParamStr)
    }
  }
  return ''
}
