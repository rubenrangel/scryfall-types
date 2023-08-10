import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    passWithNoTests: true,
    typecheck: {
      ignoreSourceErrors: true,
      include: ["test/**/*.test-d.ts"],
      tsconfig: "tsconfig.dev.json",
    },
  },
});
