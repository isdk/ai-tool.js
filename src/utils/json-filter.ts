export interface JsonFilter {
  [key: string]: any;
}


/**
 * Adds single quotes around a value if it's a string.
 * @param {boolean} shouldQuote - Whether to add quotes or not.
 * @param {string|number} value - The value to potentially quote.
 * @returns {string} The value with added quotes if necessary.
 */
function quoteValueIfString(shouldQuote: boolean, value: string | number): string {
  if (shouldQuote) {
    return `'${value}'`;
  }
  return String(value);
}

/**
 * Generates an 'AND' clause from an array of filters.
 * @param {JsonFilter[]} filters - An array of filters to combine with 'AND'.
 * @returns {string} The generated 'AND' clause.
 */
function generateAndClause(filters: JsonFilter[], wrapKey: (k: string) => string): string {
  return filters.map(block => jsonFilterToWhere(block, wrapKey)).join(' AND ');
}

/**
 * Generates an 'OR' clause from an array of filters.
 * @param {JsonFilter[]} filters - An array of filters to combine with 'OR'.
 * @returns {string} The generated 'OR' clause.
 */
function generateOrClause(filters: JsonFilter[], wrapKey: (k: string) => string): string {
  return filters.map(block => jsonFilterToWhere(block, wrapKey)).join(' OR ');
}

/**
 * Generates a condition clause for a specific data key and its associated condition object.
 * @param {string} dataKey - The data key to generate the condition for.
 * @param {JsonConditionBlock} condition - The condition object.
 * @returns {string} The generated condition clause.
 */
function generateCondition(dataKey: string, condition: JsonFilter): string {
  const andQuery: string[] = [];
  Object.keys(condition).forEach(key => {
    const value = condition[key];
    let hasQuotes = typeof condition[key] === 'string';
    switch (key) {
      case '$lt':
      case '<':
        andQuery.push(`${dataKey} < ${quoteValueIfString(hasQuotes, value)}`);
        break;
      case '<=':
      case '$lte':
        andQuery.push(`${dataKey} <= ${quoteValueIfString(hasQuotes, value)}`);
        break;
      case '$gt':
      case '>':
        andQuery.push(`${dataKey} > ${quoteValueIfString(hasQuotes, value)}`);
        break;
      case '$gte':
      case '>=':
        andQuery.push(`${dataKey} >= ${quoteValueIfString(hasQuotes, value)}`);
        break;
      case '$ne':
      case '!=':
        andQuery.push(`${dataKey} != ${quoteValueIfString(hasQuotes, value)}`);
        break;
      case '=':
      case '$eq':
        andQuery.push(`${dataKey} = ${quoteValueIfString(hasQuotes, value)}`);
        break;
      case '$in':
        andQuery.push(`${dataKey} IN (${(value as any[]).map(e => quoteValueIfString(true, e)).join(', ')})`);
        break;
      case '$nin':
        andQuery.push(`${dataKey} NOT IN (${(value as any[]).map(e => quoteValueIfString(true, e)).join(', ')})`);
        break;
      case '$regex':
        andQuery.push(`${dataKey} REGEXP '${value.source}'`);
        break;
      case '$like':
        andQuery.push(`${dataKey} LIKE '${value}'`);
        break;
      case '$nlike':
        andQuery.push(`${dataKey} NOT LIKE '${value}'`);
        break;
      case '$glob':
        andQuery.push(`${dataKey} GLOB '${value}'`);
        break;
      case '$nglob':
        andQuery.push(`${dataKey} NOT GLOB '${value}'`);
        break;
      default:
        throw new Error(`Unsupported condition operator: ${key}`);
    }
  });
  return andQuery.join(' AND ');
}

/**
 * Converts a filter object to a SQLite WHERE clause.
 * @param {JsonFilter} filter - The filter object to convert.
 * @returns {string} The generated WHERE clause.
 * @example
 * const jsonFilter: Filter = {
 *   $and: [
 *     { age: { $gt: 18, $lt: 30 } },
 *     { name: { $like: 'John%', $nlike: 'Doe%' } },
 *     { hobbies: { $in: ['reading', 'writing'] } },
 *     { $or: [{ gender: 'male' }, { country: 'USA' }] },
 *     { $and: [{ status: 'active' }, { registered: new Date('2020-01-01') }] },
 *   ],
 * };
 *
 * console.log(jsonFilterToWhere(jsonFilter)); // Outputs a WHERE clause based on the given filter
 */
export function jsonFilterToWhere(filter: JsonFilter|JsonFilter[], wrapKey?: (k: string) => string): string {
  const andQuery: string[] = [];
  if (typeof wrapKey !== 'function') {wrapKey = (k: string) => k}

  if (Array.isArray(filter)) {
    andQuery.push(generateAndClause(filter, wrapKey));
  } else for (const [key, value] of Object.entries(filter)) {
    if (key === '$and') {
      andQuery.push(`(${generateAndClause(filter[key] as JsonFilter[], wrapKey)})`);
    } else if (key === '$or') {
      andQuery.push(`(${generateOrClause(filter[key] as JsonFilter[], wrapKey)})`);
    } else {
      const tValue = typeof value
      if (value == null) {
        andQuery.push(`${wrapKey(key)} IS NULL`);
      } else if (tValue === 'object' && !Array.isArray(value)) {
        andQuery.push(generateCondition(wrapKey(key), value));
      } else if (tValue === 'string') {
        andQuery.push(`${wrapKey(key)}='${value}'`);
      } else if (tValue === 'number' || tValue === 'boolean') {
        andQuery.push(`${wrapKey(key)}=${value}`);
      } else {
        throw new Error(`Unsupported value type for key ${key}`);
      }
    }
  };
  return andQuery.length > 1 ? andQuery.join(' AND ') : andQuery[0];
}

// // Example usage:
// const jsonFilter: Filter = {
//     $and: [
//         { age: { $gt: 18, $lt: 30 } },
//         { name: { $like: 'John%', $nlike: 'Doe%' } },
//         { hobbies: { $in: ['reading', 'writing'] } },
//         { $or: [{ gender: 'male' }, { country: 'USA' }] },
//         { $and: [{ status: 'active' }, { registered: new Date('2020-01-01') }] },
//     ],
// };

// console.log(jsonFilterToWhere(jsonFilter));