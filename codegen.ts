
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000",
  documents: "src/gql/**/*.graphql",
  generates: {
    "src/gql/types.ts": { plugins: ["typescript"] },
    "src/gql/operations.ts": {
      preset: "import-types",
      plugins: ["typescript-operations", "typescript-urql"],
      presetConfig: {
        typesPath: "./types",
      },
      config: {
        withHooks: false,
      },
    },
    "src/gql/hooks": {
      preset: "near-operation-file",
      presetConfig: {
        extension: ".hooks.tsx",
        baseTypesPath: "../types.ts",
      },
      plugins: ["typescript-urql"],
      config: {
        withHooks: true,
        importOperationTypesFrom: "Operations",
        documentMode: "external",
        importDocumentNodeExternallyFrom: "./operations.tsx",
      }
  }}
};

export default config;
