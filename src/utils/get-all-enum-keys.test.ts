import { getAllEnumKeys } from './get-all-enum-keys';

describe('getAllEnumKeys', () => {
  // Define a sample enumeration for testing
  enum SampleEnum {
    Value1 = 1,
    Value2 = 2,
    Value3 = 3,
  }

  it('should return an array of string keys for the provided enum type', () => {
    const expectedKeys = ['Value1', 'Value2', 'Value3'] as const;
    const result = getAllEnumKeys(SampleEnum);

    expect(result).toEqual(expectedKeys);
    expect(result.length).toBe(3);
    expect(result.every((key) => typeof key === 'string')).toBeTruthy();
  });

  it('should handle empty enums', () => {
    enum EmptyEnum {}
    const result = getAllEnumKeys(EmptyEnum);

    expect(result).toEqual([]);
  });
});