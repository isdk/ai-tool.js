import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

import { readTextFileChunks, readTextFileChunksEx } from './read-text-file-chunks';
import { getPackageDir } from './get-package-dir';
import { splitSentence } from './split-sentence';

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
      size: 159,
    };

    const chunks: string[] = [];
    for await (const chunk of readTextFileChunks(testFilePath, options)) {
      chunks.push(chunk);
    }

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.join('').replaceAll('。\n', '。')).toBe(testData);
  });

  it('should read file in multiple chunks', async () => {
    const options = {
      size: 159,
      completeSentence: true,
      corrected: true,
      // isMarkdown: true,
    };

    const chunks: string[][] = [];
    for await (const chunk of readTextFileChunksEx(testFilePath, options)) {
      chunks.push(chunk);
    }

    expect(chunks.length).toBeGreaterThan(1);
    expect(chunks.flat().join('')).toBe(splitSentence(testData).join(''));
  });
});
