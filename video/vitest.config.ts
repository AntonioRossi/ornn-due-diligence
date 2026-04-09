import path from "node:path";

import {defineConfig} from "vitest/config";

export default defineConfig({
  resolve: {
    alias: {
      "@projects": path.resolve(process.cwd(), "../projects"),
      "@shared": path.resolve(process.cwd(), "src"),
    },
  },
  test: {
    environment: "node",
    include: ["src/**/*.test.ts", "tests/**/*.test.ts"],
  },
});
