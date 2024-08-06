import { CommonError } from './base-error';
import { createEndWithRepetitionDetector } from './end-with-repeated-sequence'

describe('createEndWithRepetitionDetector', () => {
  it('should throw an error if repetitionThreshold is less than 2', () => {
    const repetitionThreshold = 1;
    expect(() => createEndWithRepetitionDetector(repetitionThreshold)).toThrow(CommonError);
  });

  it('should return a function that detects if a string ends with a repeated sequence', () => {
    const repetitionThreshold = 3;
    const endWithRepeatedSequence = createEndWithRepetitionDetector(repetitionThreshold);
    let result = endWithRepeatedSequence('33abcabcabc')
    expect(result).toBeTruthy();
    expect(result![1]).toBe('abc');
    result = endWithRepeatedSequence('2abcabcabcabc');
    expect(result).toBeTruthy();
    expect(result![1]).toBe('abc');
    expect(endWithRepeatedSequence('12abcabc')).toBeFalsy();
    expect(endWithRepeatedSequence('1abcabcab')).toBeFalsy();
  });

  it('should return a function that uses the provided repetitionThreshold', () => {
    const repetitionThreshold = 2;
    const endWithRepeatedSequence = createEndWithRepetitionDetector(repetitionThreshold);
    expect(endWithRepeatedSequence('12abcabc')).toBeTruthy();
    expect(endWithRepeatedSequence('1abcabcabcae')).toBeFalsy();
  });
});
