import { format as formatDateTime, parse as parseDateFormat, parseISO } from 'date-fns'

export {add as addDate, formatISO, parseISO, toDate} from 'date-fns'

export { parseDateFormat }

/**
 * The global default date format string used by {@link textToDate} and {@link dateToText}.
 *
 * @defaultValue "MMMM d, y 'at' h:m:s b 'GMT'x"
 *
 * @remarks
 * Uses [date-fns format tokens](https://date-fns.org/docs/format).
 * Some common format examples:
 * - `"yyyy-MM-dd"` → ISO date
 * - `"yyyy-MM-dd HH:mm:ss"` → ISO date + time
 * - `"MMMM d, y 'at' h:m:s b 'GMT'x"` → human-readable with timezone (default)
 */
let FormatDateStr = "MMMM d, y 'at' h:m:s b 'GMT'x"
// let FormatDateStr = "yyyy-MM-dd 'at' hh:mm:ss"

/**
 * Gets or sets the global default date format string.
 *
 * When called without arguments (or with an empty/falsy value),
 * returns the current default format without changing it.
 * When called with a non-empty format string, updates the global default
 * and returns the new value.
 *
 * @param format - Optional. A [date-fns format string](https://date-fns.org/docs/format)
 *                 to set as the new global default. If falsy, the current default is unchanged.
 * @returns The current (or newly set) default format string.
 *
 * @example
 * ```ts
 * // Get the default format
 * DefaultDateFormat()
 * // => "MMMM d, y 'at' h:m:s b 'GMT'x"
 *
 * // Change the default format
 * DefaultDateFormat("yyyy-MM-dd")
 * // => "yyyy-MM-dd"
 * ```
 */
export function DefaultDateFormat(format?: string) {
  if (format) {FormatDateStr = format}
  return FormatDateStr
}

/**
 * Converts a date value of various types into a `Date` object.
 *
 * This is a safe conversion wrapper that accepts ISO strings,
 * numeric timestamps (milliseconds since epoch), and existing `Date` instances.
 * Invalid inputs return an **Invalid Date** (a `Date` whose `getTime()` is `NaN`)
 * rather than throwing.
 *
 * @param date - The date value to convert:
 *   - `string` : Parsed as an ISO 8601 date string via `parseISO`.
 *   - `number` : Interpreted as milliseconds since Unix epoch (like `new Date(timestamp)`).
 *   - `Date`   : Returned as-is (same reference).
 * @returns A `Date` instance, or an **Invalid Date** if the input cannot be parsed.
 *
 * @remarks
 * If `parseISO` or `new Date(timestamp)` throws (rare), the error is swallowed and
 * logged to `console.error`, and the function returns an **Invalid Date**.
 *
 * @example
 * ```ts
 * // From ISO string
 * toDateTime('2024-01-15T10:30:00.000Z')
 * // => Date (2024-01-15T10:30:00.000Z)
 *
 * // From timestamp
 * toDateTime(1705312200000)
 * // => Date (2024-01-15T10:30:00.000Z)
 *
 * // From existing Date (returns same reference)
 * const d = new Date()
 * toDateTime(d) === d
 * // => true
 *
 * // Invalid input (returns Invalid Date, not undefined)
 * toDateTime('not-a-date')
 * // => Date (Invalid)
 * ```
 */
export function toDateTime(date: Date|string|number) {
  let result: Date|undefined
  try {
    if (typeof date === 'string') {
      result = parseISO(date)
    } else if (typeof date === 'number') {
      result = new Date(date)
    } else if (date instanceof Date) {
      result = date
    }
  } catch (e) {
    console.error(e)
  }
  return result
}

/**
 * Parses a formatted date string into a `Date` object using a specified format.
 *
 * This is a thin wrapper around `date-fns`'s `parse` function.
 * If no format is provided, the current global default format
 * (see {@link DefaultDateFormat}) is used.
 *
 * @param date - The date string to parse (e.g., `"2024-01-15"`).
 * @param format - A [date-fns format string](https://date-fns.org/docs/format).
 *                 Defaults to the value from {@link DefaultDateFormat}.
 * @returns The parsed `Date` object. If parsing fails, returns an **Invalid Date**.
 *
 * @remarks
 * This function parses the date string in **local timezone** (determined by the
 * runtime environment). Use `parseISO` from date-fns directly if UTC parsing is
 * needed.
 *
 * @example
 * ```ts
 * // Parse with custom format
 * textToDate('2024-01-15', 'yyyy-MM-dd')
 * // => Date (Jan 15, 2024, midnight local time)
 *
 * // Parse with the global default format
 * textToDate('January 15, 2024 at 6:30:45 PM GMT+08')
 * // => Date
 * ```
 */
export function textToDate(date: string, format = FormatDateStr) {
  return parseDateFormat(date, format, new Date())
}

/**
 * Formats a `Date` object into a string using a specified format.
 *
 * If no date is provided, the current date and time is used.
 * If no format is provided, the current global default format
 * (see {@link DefaultDateFormat}) is used.
 *
 * @param date - Optional. The `Date` to format. Defaults to `new Date()` (current time).
 * @param format - A [date-fns format string](https://date-fns.org/docs/format).
 *                 Defaults to the value from {@link DefaultDateFormat}.
 * @returns The formatted date string.
 *
 * @remarks
 * This function formats the date in **local timezone** (determined by the
 * runtime environment). For UTC-based formatting, use `formatISO` from date-fns directly.
 *
 * @example
 * ```ts
 * // Format a specific date
 * dateToText(new Date('2024-01-15'), 'yyyy-MM-dd')
 * // => "2024-01-15"
 *
 * // Format with default format (uses current time if date omitted)
 * dateToText(undefined, 'yyyy-MM-dd HH:mm:ss')
 * // => "2024-01-15 10:30:45" (example)
 * ```
 */
export function dateToText(date?: Date, format = FormatDateStr) {
  if (!date) {date = new Date()}
  return formatDateTime(date, format)
}
