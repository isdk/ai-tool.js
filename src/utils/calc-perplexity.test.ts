import { calcPerplexity, calcPerplexitySimple, ProbabilityItem } from './calc-perplexity';

describe('calcPerplexity', () => {
  describe('calcPerplexitySimple', () => {
    it('should calculate perplexity correctly for valid probabilities', () => {
      const probabilities: ProbabilityItem[] = [
        { token: "hello", probability: 0.1 },
        { token: "world", probability: 0.05 }
      ];
      const result = calcPerplexitySimple(probabilities);
      expect(result).toBeCloseTo(Math.exp(-0.15 / 2));
    });

    it('should handle empty probabilities array', () => {
      const probabilities: ProbabilityItem[] = [];
      const result = calcPerplexitySimple(probabilities);
      expect(result).toBeUndefined()
    });

    it('should handle all zero probabilities', () => {
      const probabilities: ProbabilityItem[] = [
        { token: "a", probability: 0 },
        { token: "b", probability: 0 }
      ];
      const result = calcPerplexitySimple(probabilities);
      expect(result).toBe(1);
    });
  });

  describe('calcPerplexity', () => {
    it('should calculate perplexity without excluding tokens', () => {
      const probabilities: ProbabilityItem[] = [
        { token: "hello", probability: 0.1 },
        { token: "world", probability: 0.05 }
      ];
      const result = calcPerplexity(probabilities);
      expect(result).toBeCloseTo(Math.exp(-0.15 / 2));
    });

    it('should exclude control symbols and punctuation', () => {
      const probabilities: ProbabilityItem[] = [
        { token: "hello", probability: 0.1 },
        { token: "<EOS>", probability: 0.02 },
        { token: ",", probability: 0.01 }
      ];
      const options = {
        exclude: {
          controlSymbols: true,
          punctuation: true
        }
      };
      const result = calcPerplexity(probabilities, options);
      expect(result).toBeCloseTo(Math.exp(-0.1 / 1));
    });

    it('should exclude custom tokens', () => {
      const probabilities: ProbabilityItem[] = [
        { token: "hello", probability: 0.1 },
        { token: "world", probability: 0.05 },
        { token: "custom", probability: 0.03 }
      ];
      const options = {
        exclude: {
          tokens: ["custom"]
        }
      };
      const result = calcPerplexity(probabilities, options);
      expect(result).toBeCloseTo(Math.exp(-0.15 / 2));
    });

    it('should handle empty probabilities array with exclude options', () => {
      const probabilities: ProbabilityItem[] = [];
      const options = {
        exclude: {
          controlSymbols: true,
          punctuation: true
        }
      };
      const result = calcPerplexity(probabilities, options);
      expect(result).toBeUndefined()
    });
  });
});
