import { getKeysPath } from './get-keys-path'

describe('getKeysPath function', () => {
  test('handles bad input', () => {
    expect(getKeysPath({})).toEqual([]);
    expect(getKeysPath(null as any)).toEqual([]);
    expect(getKeysPath(undefined as any)).toEqual([]);
  });

  test('returns correct list of keys', () => {
    const ra = {
      name: 'ra',
      power: 100,
      friend: {
        name: 'loki',
        power: 80
      },
      enemies: [
        {
          name: 'hathor',
          power: 12
        }
      ]
    };

    expect(getKeysPath(ra)).toEqual([
      'name',
      'power',
      'friend.name',
      'friend.power',
      'enemies[0].name',
      'enemies[0].power'
    ]);
  });
});