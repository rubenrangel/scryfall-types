const { typescript } = require('projen');
const project = new typescript.TypeScriptProject({
  defaultReleaseBranch: 'main',
  name: 'scryfall-types',
  githubOptions: {
    pullRequestLintOptions: {
      semanticTitleOptions: {
        types: ['build', 'feat', 'fix', 'chore', 'ci'],
      },
    },
  },
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  gitignore: [
    '.idea',
  ],
});
project.synth();
