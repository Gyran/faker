import { defineConfig } from 'tsup';
import { allLocales } from './src';

export default defineConfig({
  entry: [
    'src/index.ts',
    ...Object.keys(allLocales).map((locale) => `src/locale/${locale}.ts`),
  ],
  outDir: 'dist',
  clean: true,
  format: ['esm', 'cjs'],
  target: ['es2019', 'node14.17'],
  dts: false, // will be generated with the "build:types" script
  minify: true,
  sourcemap: false,
  splitting: true,
});
