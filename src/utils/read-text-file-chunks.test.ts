import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { readTextFileChunks } from './read-text-file-chunks';
import { getPackageDir } from './get-package-dir';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const testFilePath = path.join(getPackageDir(__dirname), 'test','test-file.md');
const testData = await fs.readFile(testFilePath, 'utf8');

describe('readTextFileChunks', () => {
  it('should read file in one chunk', async () => {
    const chunks: string[] = [];
    for await (const chunk of readTextFileChunks(testFilePath)) {
      chunks.push(chunk);
    }

    expect(chunks.length).toBe(1);
    expect(chunks[0]).toBe(testData);
  });

  it('should read file in multiple chunks', async () => {
    const options = {
      size: 132,
    };

    const chunks: string[] = [];
    for await (const chunk of readTextFileChunks(testFilePath, options)) {
      chunks.push(chunk);
    }

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.join('')).toBe(testData);
  });
});