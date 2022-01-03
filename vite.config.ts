import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteMockServe } from "vite-plugin-mock";
import { rollupImportMapPlugin } from "rollup-plugin-import-map";

export default ({ command }) => ({
  plugins: [
    react(),
    viteMockServe({
      mockPath: "mock",
      localEnabled: command === "serve",
    }),
    {
      ...rollupImportMapPlugin([
        {
          imports: {
            react: "https://cdn.skypack.dev/react",
            "react-dom": "https://cdn.skypack.dev/react-dom",
          },
        },
      ]),
      enforce: "pre",
      apply: "build",
    },
  ],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: "src/App.tsx",
      output: {
        manualChunks: false,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
  test: {
    global: true,
    environment: "jsdom",
    deps: {
      inline: ["@testing-library/user-event"],
    },
  },
});
