import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'funcs': 'src/funcs/index.ts',
    'test/util': 'test/util/index.ts'
  },
  format: ['cjs', 'esm'],
  // splitting: true,
  // sourcemap: true,
  // clean: true,
})
