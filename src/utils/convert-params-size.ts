import { CommonError, ErrorCode } from "@isdk/ai-tool";

/**
 * Formats a parameter size in bytes into a string with an appropriate scale (T, B, M, or K),
 * optionally specifying the number of fractional digits to display.
 *
 * @param paramsSize The parameter size in bytes.
 * @param fractionDigits The number of fractional digits to include in the formatted output. Default is 0 (no fractional digits).
 * @returns A string representing the formatted parameter size with the appropriate scale unit and the specified number of fractional digits.
 */
export function paramsSizeToScaleStr(paramsSize: number, fractionDigits = 0): string {
  let num = paramsSize * 10**fractionDigits;
  let unit: string;

  if (paramsSize >= 1e12) {
    num = Math.round(num / 1e12);
    unit = 'T';  // Terabyte (T)
  } else if (paramsSize >= 1e9) {
    num = Math.round(num / 1e9);
    unit = 'B';  // Billion (B)
  } else if (paramsSize >= 1e6) {
    num = Math.round(num / 1e6);
    unit = 'M';  // Megabyte (M)
  } else if (paramsSize >= 1e3) {
    num = Math.round(num / 1e3);
    unit = 'K';  // Kilobyte (K)
  } else {
    // If the value is less than 1000, no conversion is needed; keep the original unit (bytes)
    num = Math.round(num);
    unit = '';
  }

  num = num / 10**fractionDigits

  return num.toFixed(fractionDigits) + unit;
}

/**
 * Converts a formatted parameters size string (with units T, B, M, or K) back to its byte value.
 *
 * @param scale The formatted parameter size string (e.g., "1.23B", "456M", "789K", or "123").
 * @returns The parameter size in bytes.
 */
export function scaleStrToParamsSize(scale: string): number {
  const match = scale.match(/^\s*[+]?(\d+(?:[.]\d+)?)\s*([TBMK])?\s*$/i); // Match a number (with optional decimal part) followed by an optional space and a scale unit (B, K, or M, case-insensitive)

  if (!match) {
    throw new CommonError('Invalid formatted parameter size string.', 'scaleToSize', ErrorCode.InvalidArgument);
  }

  const num = parseFloat(match[1]); // Extract the matched number
  const unit = match[2]?.toLowerCase(); // Extract the matched scale unit (lowercased)

  switch (unit) {
    case 't':
      return num * 1e12;
    case 'b':
      return num * 1e9;
    case 'm':
      return num * 1e6;
    case 'k':
      return num * 1e3;
    default:
      return num;
  }
}