const { typescript } = require("projen");
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: "main",
  name: "scryfall-types",
  releaseToNpm: true,
  prettier: true,
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ["build", "feat", "fix", "chore", "ci"],
      },
    },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  description: "TypeScript types and interfaces for the Scryfall API.",
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
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
