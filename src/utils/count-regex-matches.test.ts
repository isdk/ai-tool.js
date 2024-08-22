import { countRegexMatches } from './count-regex-matches';

describe('countRegexMatches', () => {
    it('should count matches correctly when the regex has the g flag', () => {
        const content = "hello world, hello universe";
        const regex = /hello/g;
        expect(countRegexMatches(content, regex)).toBe(2);
    });

    it('should count matches correctly when the regex does not have the g flag', () => {
        const content = "hello world, hello universe";
        const regex = /hello/;
        expect(countRegexMatches(content, regex)).toBe(2);
    });

    it('should return 0 when the input string is empty', () => {
        const content = "";
        const regex = /hello/;
        expect(countRegexMatches(content, regex)).toBe(0);
    });

    it('should return 0 when there are no matches', () => {
        const content = "hello world, hello universe";
        const regex = /goodbye/;
        expect(countRegexMatches(content, regex)).toBe(0);
    });

    it('should count multiple matches correctly', () => {
        const content = "hello world, hello universe, hello galaxy";
        const regex = /hello/;
        expect(countRegexMatches(content, regex)).toBe(3);
    });
});