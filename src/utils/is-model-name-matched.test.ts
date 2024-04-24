import { isModelNameMatched } from './is-model-name-matched';

describe("IsModelNameMatched", () => {
  describe("String Rule", () => {
    it("should return true when the model name matches the rule exactly", () => {
      expect(isModelNameMatched("test", "test")).toBe(true);
    });

    it("should return false when the model name does not match the rule exactly", () => {
      expect(isModelNameMatched("other", "test")).toBe(false);
    });

    it("should return true when the rule is a case-insensitive match", () => {
      expect(isModelNameMatched("Test", "test")).toBe(true);
    });
  });

  describe("Array Rule", () => {
    it("should return true when the model name matches any string in the array", () => {
      expect(isModelNameMatched("test", ["hello", "test", "world"])).toBe(true);
    });

    it("should return false when the model name does not match any string in the array", () => {
      expect(isModelNameMatched("other", ["hello", "world"])).toBe(false);
    });

    it("should return true when the model name matches any regular expression in the array", () => {
      expect(
        isModelNameMatched("test", [/^t/, /test$/, /other/])
      ).toBe(true);
    });

    it("should return false when the model name does not match any regular expression in the array", () => {
      expect(
        isModelNameMatched("other", [/^t/, /hello$/, /world/])
      ).toBe(false);
    });
  });

  describe("Function Rule", () => {
    it("should return true when the function returns true", () => {
      expect(isModelNameMatched("test", (modelName) => modelName === "test")).toBe(true);
    });

    it("should return false when the function returns false", () => {
      expect(isModelNameMatched("other", (modelName) => modelName === "test")).toBe(false);
    });
  });

  describe("Edge Cases", () => {
    it("should return false when the rule is undefined", () => {
      expect(isModelNameMatched("test", undefined)).toBe(false);
    });

    it("should return false when the rule is null", () => {
      expect(isModelNameMatched("test", null as any)).toBe(false);
    });

    it("should throw an error when the model name is undefined", () => {
      expect(()=>isModelNameMatched(undefined as any, "test")).toThrow('modelName must be a string');
    });

    it("should throw an error when the model name is null", () => {
      expect(()=>isModelNameMatched(null as any, "test")).toThrow('modelName must be a string')
    });
  });
});
