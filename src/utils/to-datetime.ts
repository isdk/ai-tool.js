import { format as formatDateTime, parse, parseISO } from 'date-fns'

const FormatDateStr = "MMMM d, y 'at' h:m:s b 'GMT'x"

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
  return parse(date, format, new Date())
}

export function dateToText(date: Date, format = FormatDateStr) {
  return formatDateTime(date, format)
}
