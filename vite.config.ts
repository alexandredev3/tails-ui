import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./scripts/test-setup.ts'],
    include: ['packages/components/**/tests/*.spec.{ts,tsx}']
  }
});