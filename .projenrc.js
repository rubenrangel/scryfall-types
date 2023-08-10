const { typescript } = require("projen");
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "scryfall-types",
  description: "TypeScript types and interfaces for the Scryfall API.",
  keywords: [
    "scryfall",
    "api",
    "typescript",
    "types",
    "interfaces",
    "mtg",
    "magic",
    "gathering",
  ],
  releaseToNpm: true,
  jest: false,
  prettier: true,
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["build", "feat", "fix", "chore", "ci"],
      },
    },
  },
  gitignore: [".idea"],
  tsconfig: {
    compilerOptions: {
      emitDeclarationOnly: true,
    },
  },
  tsconfigDev: {
    include: ["vite.config.ts"],
    compilerOptions: {
      lib: ["dom", "es2019"],
    },
  },
  entrypoint: "",
  devDeps: ["vitest"],
});

project.addPackageIgnore(".gitattributes");
project.addPackageIgnore(".prettierignore");
project.addPackageIgnore(".prettierrc.json");
project.addPackageIgnore("CODE_OF_CONDUCT.md");
project.addPackageIgnore("CONTRIBUTING.md");

project.package.addField("types", "./lib/index.d.ts");

project.testTask.reset("vitest typecheck --run");

project.synth();
