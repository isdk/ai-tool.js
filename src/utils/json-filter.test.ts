import { jsonFilterToWhere, JsonFilter } from './json-filter'

describe('toWhereClause function', () => {
    it('should handle simple conditions correctly', () => {
        const filter: JsonFilter = {
            name: 'John Doe',
            age: 30,
        };

        expect(jsonFilterToWhere(filter)).toBe('name=\'John Doe\' AND age=30');
    });

    it('should handle nested conditions correctly', () => {
        const filter: JsonFilter = {
            $and: [
                { name: { $like: '%John%', $nlike: 'Doe%' } },
                { age: { $gt: 18, $lt: 30 } },
            ],
        };

        expect(jsonFilterToWhere(filter)).toBe(
            '(name LIKE \'%John%\' AND name NOT LIKE \'Doe%\' AND age > 18 AND age < 30)'
        );
    });

    it('should handle $or conditions correctly', () => {
        const filter: JsonFilter = {
            $or: [
                { gender: 'male' },
                { country: 'USA' },
            ],
        };

        expect(jsonFilterToWhere(filter)).toBe('(gender=\'male\' OR country=\'USA\')');
    });

    it('should handle $in and $nin conditions correctly', () => {
        const filter: JsonFilter = {
            hobbies: { $in: ['reading', 'writing'] },
            skills: { $nin: ['programming', 'design'] },
        };

        expect(jsonFilterToWhere(filter)).toBe(
            'hobbies IN (\'reading\', \'writing\') AND skills NOT IN (\'programming\', \'design\')'
        );
    });

    it('should handle $regex and $like conditions correctly', () => {
        const filter: JsonFilter = {
            email: { $regex: /^john/ },
            bio: { $like: 'loves coding%' },
        };

        expect(jsonFilterToWhere(filter)).toBe('email REGEXP \'^john\' AND bio LIKE \'loves coding%\'');
    });

    it('should handle mixed conditions correctly', () => {
        const filter: JsonFilter = {
            $and: [
                { name: { $like: 'John%', $nlike: 'Doe%' } },
                { age: { $gt: 18, $lt: 30 } },
                { $or: [{ gender: 'male' }, { country: 'USA' }, {$and: [{a: 1}, {b:2}]}] },
            ],
        };

        expect(jsonFilterToWhere(filter)).toBe(
            `(name LIKE 'John%' AND name NOT LIKE 'Doe%' AND age > 18 AND age < 30 AND (gender='male' OR country='USA' OR (a=1 AND b=2)))`
        );
    });
});