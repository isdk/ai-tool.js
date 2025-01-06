import {vi as jest} from 'vitest'
import { hash } from './hash';
import { HashAlgorithm, HASH_ALGOS, SEED } from './const';
import * as _base32768 from 'base32768';

describe('hash', () => {
  const mockHasher = {
    init: jest.fn(),
    update: jest.fn(),
    digest: jest.fn()
  };

  // jest.spyOn(_base32768, 'encode').mockImplementation((data) => 'encoded_' + data.toString());
  (HASH_ALGOS as any)[HashAlgorithm.xxhash64] = jest.fn(() => Promise.resolve(mockHasher));
  (HASH_ALGOS as any)[HashAlgorithm.sha256] = jest.fn(() => Promise.resolve(mockHasher));


  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should use default hash algorithm when not provided', async () => {
    const fakeResult: any = 'binary_result'
    mockHasher.digest.mockReturnValue(fakeResult);
    const result = await hash('testValue');
    expect(HASH_ALGOS[HashAlgorithm.xxhash64]).toHaveBeenCalledWith(SEED);
    const e = _base32768.encode(fakeResult)
    expect(result).toBe(e);
  });

  it('should use provided hash algorithm', async () => {
    const fakeResult: any = 'binary_result'
    mockHasher.digest.mockReturnValue(fakeResult);
    const result = await hash('testValue', { hashAlgo: HashAlgorithm.sha256 });
    expect(HASH_ALGOS[HashAlgorithm.sha256]).toHaveBeenCalledWith(SEED);
    const e = _base32768.encode(fakeResult)
    expect(result).toBe(e);
  });

  it('should use default seed when not provided', async () => {
    const fakeResult: any = 'binary_result'
    mockHasher.digest.mockReturnValue(fakeResult);
    const result = await hash('testValue', { hashAlgo: HashAlgorithm.sha256 });
    expect(HASH_ALGOS[HashAlgorithm.sha256]).toHaveBeenCalledWith(SEED);
    const e = _base32768.encode(fakeResult)
    expect(result).toBe(e);
  });

  it('should return binary output when outputType is binary', async () => {
    const fakeResult: any = 'binary_result'
    mockHasher.digest.mockReturnValue(fakeResult);
    const result = await hash('testValue', { outputType: 'binary' });
    expect(result).toBe('binary_result');
  });

  it('should return encoded string output when outputType is string', async () => {
    const fakeResult: any = 'binary_result'
    mockHasher.digest.mockReturnValue(fakeResult);
    const result = await hash('testValue', { outputType: 'string' });
    const e = _base32768.encode(fakeResult)
    expect(result).toBe(e);
  });
});
