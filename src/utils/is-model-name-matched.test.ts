import { isModelNameMatched } from './is-model-name-matched';

describe("IsModelNameMatched", () => {
  describe("String Rule", () => {
    it("should return true when the model name matches the rule exactly", () => {
      expect(isModelNameMatched("test", "test")).toBe('test');
    });

    it("should return false when the model name does not match the rule exactly", () => {
      expect(isModelNameMatched("other", "test")).toBeUndefined()
    });

    it("should return true when the rule is a case-insensitive match", () => {
      expect(isModelNameMatched("Test", "test")).toBe('test');
    });
  });
  describe("RegExp Rule", () => {
    it("should return true when the model name matches the rule exactly", () => {
      expect(isModelNameMatched("Test1", /test/i)).toStrictEqual(/test/i.exec('Test1'));
    });

    it("should return true when the model name matches the string regexp rule exactly", () => {
      expect(isModelNameMatched("Test1", '/test/i')).toStrictEqual(/test/i.exec('Test1'));
    });

    it("should return false when the model name does not match the rule exactly", () => {
      expect(isModelNameMatched("otherTest", /^test/i)).toBeUndefined()
    });
  });

  describe("Array Rule", () => {
    it("should return true when the model name matches any string in the array", () => {
      expect(isModelNameMatched("test", ["hello", "test", "world"])).toBe("test");
    });

    it("should return false when the model name does not match any string in the array", () => {
      expect(isModelNameMatched("other", ["hello", "world"])).toBeUndefined()
    });

    it("should return true when the model name matches any regular expression in the array", () => {
      expect(
        isModelNameMatched("test", [/^T/, /test$/, /other/])
      ).toStrictEqual(/test$/.exec('test'));
    });

    it("should return true when the model name matches any string regular expression in the array", () => {
      expect(
        isModelNameMatched("test", ['/^T/', '/Test$/i', '/other/'])
      ).toStrictEqual(/Test$/i.exec('test'));
    });

    it("should return false when the model name does not match any regular expression in the array", () => {
      expect(
        isModelNameMatched("other", [/^t/, /hello$/, /world/])
      ).toBeUndefined()
    });
    it("should return true when the model name matches by function in the array", () => {
      expect(
        isModelNameMatched("test", [/^t/, (t) => t === "test" ? 'test': undefined, /other/])
      ).toStrictEqual(/^t/.exec('test'));
    });
  });

  describe("Function Rule", () => {
    it("should return true when the function returns true", () => {
      expect(isModelNameMatched("test", (modelName) => modelName === "test" ? 'test': undefined)).toBe('test');
    });

    it("should return false when the function returns false", () => {
      expect(isModelNameMatched("other", (modelName) => modelName === "test" ? 'test': undefined)).toBeUndefined()
    });
  });

  describe("Edge Cases", () => {
    it("should return false when the rule is undefined", () => {
      expect(isModelNameMatched("test", undefined)).toBeUndefined()
    });

    it("should return false when the rule is null", () => {
      expect(isModelNameMatched("test", null as any)).toBeUndefined()
    });

    it("should throw an error when the model name is undefined", () => {
      expect(()=>isModelNameMatched(undefined as any, "test")).toThrow('modelName must be a string');
    });

    it("should throw an error when the model name is null", () => {
      expect(()=>isModelNameMatched(null as any, "test")).toThrow('modelName must be a string')
    });
  });
});
