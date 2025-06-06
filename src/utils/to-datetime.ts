import { format as formatDateTime, parse as parseDateFormat, parseISO } from 'date-fns'

export {add as addDate, formatISO, parseISO, toDate} from 'date-fns'

export { parseDateFormat }

let FormatDateStr = "MMMM d, y 'at' h:m:s b 'GMT'x"
// let FormatDateStr = "yyyy-MM-dd 'at' hh:mm:ss"

export function DefaultDateFormat(format?: string) {
  if (format) {FormatDateStr = format}
  return FormatDateStr
}

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

export function textToDate(date: string, format = FormatDateStr) {
  return parseDateFormat(date, format, new Date())
}

export function dateToText(date: Date, format = FormatDateStr) {
  return formatDateTime(date, format)
}
