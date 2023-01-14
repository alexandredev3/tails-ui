import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  target: 'es2017',
  format: [
    "cjs",
    "esm"
  ]
});