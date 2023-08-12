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
  gitignore: [
    ".idea",
    ".pnp.*",
    ".yarn/*",
    "!.yarn/patches",
    "!.yarn/plugins",
    "!.yarn/releases",
    "!.yarn/sdks",
    "!.yarn/versions",
  ],
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
  devDeps: ["vitest", "wrap-ansi"],
  depsUpgrade: false,
  workflowNodeVersion: "18",
  workflowBootstrapSteps: [
    {
      name: "Setup Node.js",
      uses: "actions/setup-node@v3",
      with: {
        "node-version": "18",
        // cache: "yarn",
        // "cache-dependency-path": "yarn.lock",
      },
    },
    {
      run: "corepack enable",
    },
    {
      run: "corepack prepare yarn@stable --activate",
    },
  ],
});

project.addPackageIgnore(".gitattributes");
project.addPackageIgnore(".prettierignore");
project.addPackageIgnore(".prettierrc.json");
project.addPackageIgnore(".vite.config.ts");
project.addPackageIgnore("CODE_OF_CONDUCT.md");
project.addPackageIgnore("CONTRIBUTING.md");
project.addPackageIgnore("coverage");

project.package.addField("types", "./lib/index.d.ts");

project.synth();
