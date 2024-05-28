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
    expect(endWithRepeatedSequence('33abcabcabc')).toBe(true);
    expect(endWithRepeatedSequence('2abcabcabcabc')).toBe(true);
    expect(endWithRepeatedSequence('12abcabc')).toBe(false);
    expect(endWithRepeatedSequence('1abcabcab')).toBe(false);
  });

  it('should return a function that uses the provided repetitionThreshold', () => {
    const repetitionThreshold = 2;
    const endWithRepeatedSequence = createEndWithRepetitionDetector(repetitionThreshold);
    expect(endWithRepeatedSequence('12abcabc')).toBe(true);
    expect(endWithRepeatedSequence('1abcabcabcae')).toBe(false);
  });
});
