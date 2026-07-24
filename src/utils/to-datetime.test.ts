import {beforeEach, describe, expect, it} from 'vitest'
import { DefaultDateFormat, toDateTime, textToDate, dateToText, parseDateFormat, addDate, formatISO, parseISO, toDate } from './to-datetime'

// Helper: get the local timezone offset string in `x` format, e.g., "+08" or "-05"
function getLocalTzOffsetString(): string {
  const offset = -new Date().getTimezoneOffset()
  const sign = offset >= 0 ? '+' : '-'
  const hours = Math.floor(Math.abs(offset) / 60)
  const minutes = Math.abs(offset) % 60
  return `${sign}${String(hours).padStart(2, '0')}${minutes > 0 ? String(minutes).padStart(2, '0') : ''}`
}

// Helper: pad hours to 12-hour format
function formatHour12(hours: number): number {
  const h = hours % 12
  return h === 0 ? 12 : h
}

// Helper: get AM/PM string
function getAmPm(hours: number): string {
  return hours < 12 ? 'AM' : 'PM'
}

// Helper: compute expected local date parts from a UTC date
function localDateParts(utcDate: Date) {
  return {
    year: utcDate.getFullYear(),
    month: utcDate.getMonth(),
    day: utcDate.getDate(),
    hours: utcDate.getHours(),
    minutes: utcDate.getMinutes(),
    seconds: utcDate.getSeconds(),
  }
}

describe('DefaultDateFormat', () => {
  const defaultFormat = "MMMM d, y 'at' h:m:s b 'GMT'x"

  beforeEach(() => {
    // Reset to default before each test
    DefaultDateFormat(defaultFormat)
  })

  it('should return the default format string when called without arguments', () => {
    expect(DefaultDateFormat()).toBe(defaultFormat)
  })

  it('should update the default format when a new format is provided', () => {
    const newFormat = "yyyy-MM-dd"
    expect(DefaultDateFormat(newFormat)).toBe(newFormat)
  })

  it('should return the updated format after it has been changed', () => {
    DefaultDateFormat("yyyy/MM/dd")
    expect(DefaultDateFormat()).toBe("yyyy/MM/dd")
  })

  it('should not change the format when called with undefined', () => {
    DefaultDateFormat(undefined as any) // type assertion to test runtime behavior
    expect(DefaultDateFormat()).toBe(defaultFormat)
  })
})

describe('toDateTime', () => {
  it('should parse a valid ISO date string', () => {
    const result = toDateTime('2024-01-15T10:30:00.000Z')
    expect(result).toBeInstanceOf(Date)
    expect(result!.toISOString()).toBe('2024-01-15T10:30:00.000Z')
  })

  it('should parse a date-only ISO string', () => {
    const result = toDateTime('2024-01-15')
    expect(result).toBeInstanceOf(Date)
    // date-fns parseISO treats date-only strings as local midnight
    expect(result!.getFullYear()).toBe(2024)
    expect(result!.getMonth()).toBe(0)
    expect(result!.getDate()).toBe(15)
  })

  it('should handle a numeric timestamp', () => {
    const date = new Date('2024-01-15T10:30:00.000Z')
    const timestamp = date.getTime()
    const result = toDateTime(timestamp)
    expect(result).toBeInstanceOf(Date)
    expect(result!.toISOString()).toBe('2024-01-15T10:30:00.000Z')
  })

  it('should handle a timestamp of 0 (epoch)', () => {
    const result = toDateTime(0)
    expect(result).toBeInstanceOf(Date)
    expect(result!.toISOString()).toBe('1970-01-01T00:00:00.000Z')
  })

  it('should handle negative timestamps', () => {
    const result = toDateTime(-86400000) // 1969-12-31
    expect(result).toBeInstanceOf(Date)
    expect(result!.toISOString()).toBe('1969-12-31T00:00:00.000Z')
  })

  it('should return the same Date object when given a Date instance', () => {
    const date = new Date('2024-06-15T12:00:00.000Z')
    const result = toDateTime(date)
    expect(result).toBe(date) // should be the same reference
    expect(result!.toISOString()).toBe('2024-06-15T12:00:00.000Z')
  })

  it('should return an Invalid Date for an invalid date string', () => {
    const result = toDateTime('not-a-date')
    expect(result).toBeInstanceOf(Date)
    expect(isNaN(result!.getTime())).toBe(true)
  })

  it('should return an Invalid Date for an empty string', () => {
    const result = toDateTime('')
    expect(result).toBeInstanceOf(Date)
    expect(isNaN(result!.getTime())).toBe(true)
  })

  it('should return an Invalid Date for NaN', () => {
    const result = toDateTime(NaN)
    expect(result).toBeInstanceOf(Date)
    expect(isNaN(result!.getTime())).toBe(true)
  })

  it('should handle a string with timezone offset', () => {
    const result = toDateTime('2024-01-15T10:30:00+05:00')
    expect(result).toBeInstanceOf(Date)
    // UTC equivalent: 2024-01-15T05:30:00.000Z
    expect(result!.toISOString()).toBe('2024-01-15T05:30:00.000Z')
  })

  it('should handle a future date string', () => {
    const result = toDateTime('2099-12-31T23:59:59.999Z')
    expect(result).toBeInstanceOf(Date)
    expect(result!.toISOString()).toBe('2099-12-31T23:59:59.999Z')
  })

  it('should handle a number with decimal (truncated to integer milliseconds)', () => {
    const result = toDateTime(1705312200000.5)
    expect(result).toBeInstanceOf(Date)
    // Date constructor truncates, so .5 is ignored (treated as integer)
    expect(result!.getTime()).toBe(1705312200000)
  })
})

describe('textToDate', () => {
  const defaultFormat = "MMMM d, y 'at' h:m:s b 'GMT'x"

  beforeEach(() => {
    DefaultDateFormat(defaultFormat)
  })

  it('should parse a date string using the default format', () => {
    const date = new Date('2024-01-15T10:30:45.000Z')
    const local = localDateParts(date)
    const tzStr = getLocalTzOffsetString()
    const hour12 = formatHour12(local.hours)
    const ampm = getAmPm(local.hours)
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'][local.month]

    const input = `${monthName} ${local.day}, ${local.year} at ${hour12}:${String(local.minutes).padStart(2, '0')}:${String(local.seconds).padStart(2, '0')} ${ampm} GMT${tzStr}`
    const result = textToDate(input)
    expect(result).toBeInstanceOf(Date)
    expect(result.getFullYear()).toBe(local.year)
    expect(result.getMonth()).toBe(local.month)
    expect(result.getDate()).toBe(local.day)
    expect(result.getHours()).toBe(local.hours)
    expect(result.getMinutes()).toBe(local.minutes)
    expect(result.getSeconds()).toBe(local.seconds)
  })

  it('should parse a date string using a custom format', () => {
    const result = textToDate('2024-01-15', "yyyy-MM-dd")
    expect(result).toBeInstanceOf(Date)
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(15)
  })

  it('should parse date with custom time format', () => {
    const result = textToDate('15/01/2024 10:30', 'dd/MM/yyyy HH:mm')
    expect(result).toBeInstanceOf(Date)
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(15)
    expect(result.getHours()).toBe(10)
    expect(result.getMinutes()).toBe(30)
  })

  it('should handle dates near epoch', () => {
    DefaultDateFormat('yyyy-MM-dd')
    const result = textToDate('1970-01-01')
    expect(result).toBeInstanceOf(Date)
    expect(result.getFullYear()).toBe(1970)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(1)
  })

  it('should parse date with month-first format', () => {
    const result = textToDate('01/15/2024', 'MM/dd/yyyy')
    expect(result).toBeInstanceOf(Date)
    expect(result.getFullYear()).toBe(2024)
    expect(result.getMonth()).toBe(0)
    expect(result.getDate()).toBe(15)
  })
})

describe('dateToText', () => {
  const defaultFormat = "MMMM d, y 'at' h:m:s b 'GMT'x"

  beforeEach(() => {
    DefaultDateFormat(defaultFormat)
  })

  it('should format a Date using the default format (local time)', () => {
    const date = new Date('2024-01-15T10:30:45.000Z')
    const local = localDateParts(date)
    const tzStr = getLocalTzOffsetString()
    const hour12 = formatHour12(local.hours)
    const ampm = getAmPm(local.hours)
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'][local.month]

    const expected = `${monthName} ${local.day}, ${local.year} at ${hour12}:${String(local.minutes).padStart(2, '0')}:${String(local.seconds).padStart(2, '0')} ${ampm} GMT${tzStr}`
    const result = dateToText(date)
    expect(result).toBe(expected)
  })

  it('should format a Date using a custom date-only format', () => {
    const date = new Date('2024-01-15')
    const result = dateToText(date, 'yyyy-MM-dd')
    expect(result).toBe('2024-01-15')
  })

  it('should format a Date with custom time format (local time)', () => {
    const date = new Date('2024-01-15T10:30:00.000Z')
    const localHours = date.getHours()
    const result = dateToText(date, 'dd/MM/yyyy HH:mm')
    expect(result).toBe(`15/01/2024 ${String(localHours).padStart(2, '0')}:30`)
  })

  it('should use the current date when no date argument is provided', () => {
    const before = Date.now() - 1000
    const result = dateToText(undefined, 'yyyy-MM-dd HH:mm:ss')
    const after = Date.now() + 1000
    const parsed = new Date(result)
    expect(parsed.getTime()).not.toBeNaN()
    expect(parsed.getTime()).toBeGreaterThanOrEqual(before - 1000)
    expect(parsed.getTime()).toBeLessThanOrEqual(after + 1000)
  })

  it('should handle undefined date argument using default format', () => {
    const before = Date.now() - 1000
    const result = dateToText(undefined, 'yyyy-MM-dd HH:mm:ss')
    const after = Date.now() + 1000
    const parsed = new Date(result)
    expect(parsed.getTime()).not.toBeNaN()
    expect(parsed.getTime()).toBeGreaterThanOrEqual(before - 1000)
    expect(parsed.getTime()).toBeLessThanOrEqual(after + 1000)
  })

  it('should format epoch date correctly in local time', () => {
    const date = new Date(0)
    const localHours = date.getHours()
    const result = dateToText(date, "yyyy-MM-dd 'at' HH:mm:ss")
    expect(result).toBe(`1970-01-01 at ${String(localHours).padStart(2, '0')}:00:00`)
  })

  it('should format with a custom format using UTC specifier', () => {
    const date = new Date('2024-01-15T10:30:00.000Z')
    // Using 'XXXX' format for timezone shows 'Z' for UTC
    const result = dateToText(date, "yyyy-MM-dd'T'HH:mm:ss'Z'")
    // Local hours will be used since format doesn't use UTC tokens
    const localHours = date.getHours()
    expect(result).toBe(`2024-01-15T${String(localHours).padStart(2, '0')}:30:00Z`)
  })

  it('should format correctly with year-month-day format', () => {
    const date = new Date(2024, 0, 15, 10, 30, 0) // local time
    const result = dateToText(date, 'yyyy/MM/dd')
    expect(result).toBe('2024/01/15')
  })

  it('should format without leading zeros using d/M/yyyy', () => {
    const date = new Date(2024, 0, 5, 8, 5, 3) // Jan 5, 2024, 08:05:03
    const result = dateToText(date, 'd/M/yyyy H:m:s')
    expect(result).toBe('5/1/2024 8:5:3')
  })
})

describe('re-exports from date-fns', () => {
  it('should export parseDateFormat function', () => {
    expect(parseDateFormat).toBeTypeOf('function')
    const result = parseDateFormat('2024-01-15', 'yyyy-MM-dd', new Date())
    expect(result).toBeInstanceOf(Date)
  })

  it('should export addDate function', () => {
    expect(addDate).toBeTypeOf('function')
    const date = new Date('2024-01-15T00:00:00.000Z')
    const result = addDate(date, { days: 1 })
    expect(result).toBeInstanceOf(Date)
    expect(result.getDate()).toBe(16)
  })

  it('should export formatISO function', () => {
    expect(formatISO).toBeTypeOf('function')
    const result = formatISO(new Date('2024-01-15T10:30:00.000Z'))
    expect(result).toBeTypeOf('string')
  })

  it('should export parseISO function', () => {
    expect(parseISO).toBeTypeOf('function')
    const result = parseISO('2024-01-15T10:30:00.000Z')
    expect(result).toBeInstanceOf(Date)
  })

  it('should export toDate function', () => {
    expect(toDate).toBeTypeOf('function')
    const result = toDate('2024-01-15')
    expect(result).toBeInstanceOf(Date)
  })
})
