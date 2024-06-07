/**
 * Extracts the protocol part from a URL-like string.
 *
 * This function checks a given string to find the protocol section of a URL.
 * If the string contains the sequence '://', it returns the substring from the start of the string
 * up to the '//' characters. If the sequence is not found, the function returns undefined.
 *
 * @param name - The string to inspect, expected to contain a URL.
 * @returns {string | undefined} - The protocol part if '://' is found; otherwise, undefined.
 *
 * @example
 * // Returns "http"
 * matchUrlProtocol("http://example.com");
 *
 * @example
 * // Returns "ftp"
 * matchUrlProtocol("ftp://myftpserver.com");
 *
 * @example
 * // Returns undefined
 * matchUrlProtocol("noProtocolHere");
 */
export function matchUrlProtocol(name: string) {
  const index = name.indexOf('://')
  if (index > 0) {
    return name.substring(0, index)
  }
}
