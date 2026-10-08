import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';
import { fileURLToPath } from 'node:url';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  { ignores: ['**/node_modules/**', '**/.next/**', '**/next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  prettier,
  { settings: { next: { rootDir: fileURLToPath(new URL('./apps/web/', import.meta.url)) } } },
];
