import { CommonError } from './base-error';
import { paramsSizeToScaleStr, scaleStrToParamsSize } from './convert-params-size';

describe('paramsSizeToScaleStr', () => {
  it('should format sizes with the appropriate unit and default precision', () => {
    expect(paramsSizeToScaleStr(120)).toBe('120');
    expect(paramsSizeToScaleStr(1234)).toBe('1K');
    expect(paramsSizeToScaleStr(1534)).toBe('2K');
    expect(paramsSizeToScaleStr(1234567)).toBe('1M');
    expect(paramsSizeToScaleStr(1534567)).toBe('2M');
    expect(paramsSizeToScaleStr(1234567890)).toBe('1B');
    expect(paramsSizeToScaleStr(1534567890)).toBe('2B');
    expect(paramsSizeToScaleStr(1234567890123)).toBe('1T');
    expect(paramsSizeToScaleStr(1534567890123)).toBe('2T');
  });

  it('should format sizes with the specified precision', () => {
    expect(paramsSizeToScaleStr(1235, 2)).toBe('1.24K');
    expect(paramsSizeToScaleStr(1534567, 2)).toBe('1.53M');
    expect(paramsSizeToScaleStr(1234567890, 3)).toBe('1.235B');
    expect(paramsSizeToScaleStr(1234567890123, 3)).toBe('1.235T');
  });
});

describe('scaleStrToParamsSize', () => {
  it('should convert a string without a scale unit to a number', () => {
    expect(scaleStrToParamsSize('1234')).toBe(1234);
    expect(scaleStrToParamsSize('4567.89')).toBe(4567.89);
  });

  it('should convert strings with scale units to their corresponding values', () => {
    expect(scaleStrToParamsSize('1.23T')).toBeCloseTo(1.23e12);
    expect(scaleStrToParamsSize('5B')).toBeCloseTo(5e9);
    expect(scaleStrToParamsSize('789.12M')).toBeCloseTo(789.12e6);
    expect(scaleStrToParamsSize('1.5K')).toBeCloseTo(1.5e3);
  });

  it('should handle different cases and whitespace variations', () => {
    expect(scaleStrToParamsSize('  1.23t  ')).toBeCloseTo(1.23e12);
    expect(scaleStrToParamsSize('5 B')).toBeCloseTo(5e9);
    expect(scaleStrToParamsSize(' 789.12m  ')).toBeCloseTo(789.12e6);
    expect(scaleStrToParamsSize('  1.5 k  ')).toBeCloseTo(1.5e3);
  });

  it('should throw an error for invalid formatted strings', () => {
    expect(() => scaleStrToParamsSize('invalid')).toThrow(CommonError);
    expect(() => scaleStrToParamsSize('123abc')).toThrow(CommonError);
    expect(() => scaleStrToParamsSize('123.45G')).toThrow(CommonError);
    expect(() => scaleStrToParamsSize('123.45.67')).toThrow(CommonError);
  });
});