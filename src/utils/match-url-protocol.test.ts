import { matchUrlProtocol } from './match-url-protocol';

describe('matchUrlProtocol', () => {
  it('should return the protocol if it exists', () => {
    expect(matchUrlProtocol('http://example.com')).toBe('http');
    expect(matchUrlProtocol('https://example.com')).toBe('https');
  });

  it('should return undefined if the protocol does not exist', () => {
    expect(matchUrlProtocol('example.com')).toBeUndefined();
  });

  it('should return undefined if the input is empty', () => {
    expect(matchUrlProtocol('')).toBeUndefined();
  });
});