const { typescript, JsonPatch } = require("projen");
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
  devDeps: ["vitest"],
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
    {
      name: "Install dependencies",
      run: "yarn install --immutable",
    },
  ],
});

project.tasks.tryFind("install").reset("yarn install");
project.tasks.tryFind("install:ci").reset("yarn install --immutable");

project.github
  .tryFindWorkflow("build")
  .file.patch(JsonPatch.remove("/jobs/build/steps/5"));
project.github
  .tryFindWorkflow("build")
  .file.patch(JsonPatch.remove("/jobs/build/steps/5"));

project.github
  .tryFindWorkflow("release")
  .file.patch(JsonPatch.remove("/jobs/release/steps/6"));
project.github
  .tryFindWorkflow("release")
  .file.patch(JsonPatch.remove("/jobs/release/steps/6"));

project.github
  .tryFindWorkflow("upgrade-main")
  .file.patch(JsonPatch.remove("/jobs/upgrade/steps/5"));
project.github
  .tryFindWorkflow("upgrade-main")
  .file.patch(JsonPatch.remove("/jobs/upgrade/steps/5"));

project.addPackageIgnore(".gitattributes");
project.addPackageIgnore(".prettierignore");
project.addPackageIgnore(".prettierrc.json");
project.addPackageIgnore("vite.config.ts");
project.addPackageIgnore(".yarn");
project.addPackageIgnore(".yarnrc.yml");
project.addPackageIgnore("yarn-error.log");
project.addPackageIgnore("CODE_OF_CONDUCT.md");
project.addPackageIgnore("CONTRIBUTING.md");
project.addPackageIgnore("coverage");

project.package.addField("types", "./lib/index.d.ts");

project.testTask.reset("vitest typecheck --run");

project.synth();
