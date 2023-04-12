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
  entrypoint: "",
});

project.addPackageIgnore(".gitattributes");
project.addPackageIgnore(".prettierignore");
project.addPackageIgnore(".prettierrc.json");
project.addPackageIgnore("CODE_OF_CONDUCT.md");
project.addPackageIgnore("CONTRIBUTING.md");

project.package.addField("types", "./lib/index.d.ts");

project.synth();
