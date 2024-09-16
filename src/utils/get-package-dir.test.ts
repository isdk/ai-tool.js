import { vi } from 'vitest';
import path from 'path';
import { packageDirectorySync } from 'pkg-dir';
import { getPackageDir } from './get-package-dir';
import fs from 'fs';
import { existsSync } from 'fs';

const dirs: string[] = []

describe('getPackageDir', () => {
  afterAll(() => {
    cleanupTestDirs();
  });

  it('should return the package directory when found directly', () => {
    const cwd = '/tmp/getPackageDirTest/to/package';
    createTestDirectory(cwd, true);
    createTestDirectory(cwd + '/subTest');

    expect(getPackageDir(cwd)).toBe(cwd);
    expect(getPackageDir(cwd + '/subTest')).toBe(cwd);
  });

  it('should return the parent directory of "dist" folder', () => {
    const root = '/tmp/getPackageDirTest/to/project'
    const cwd = root + '/dist';
    createTestDirectory(cwd, false);

    expect(getPackageDir(cwd)).toBe(root);
  });

  it('should return the parent directory of "src" folder when "dist" is not found', () => {
    const cwd = '/tmp/getPackageDirTest/to/project/src';
    createTestDirectory(cwd, false);

    expect(getPackageDir(cwd)).toBe('/tmp/getPackageDirTest/to/project');
  });

  it('should throw an error when neither "package.json", "dist", nor "src" are found', () => {
    const cwd = '/tmp/getPackageDirTest/to/unknown';
    createTestDirectory(cwd, false); // 创建不包含 package.json 的目录

    expect(() => getPackageDir(cwd)).toThrow('can not find package directory');
  });
});

function createTestDirectory(cwd: string, hasPackageJson?: boolean) {
  const parts = cwd.split(path.sep);
  const dir = parts.join(path.sep);

  if (!existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  dirs.push(dir);

  if (hasPackageJson) {
    fs.writeFileSync(path.join(dir, 'package.json'), '{}');
  }
}

function cleanupTestDirs() {
  dirs.forEach((dir) => {
    if (existsSync(dir)) {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
}