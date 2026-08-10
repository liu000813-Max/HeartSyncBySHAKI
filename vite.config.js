import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/HeartSyncBySHAKI/' : '/',
  // Use React's automatic JSX runtime so the browser bundle does not depend on a global React.
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'react',
  },
  server: {
    host: true,
  },
})
