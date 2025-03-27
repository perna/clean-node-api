import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import love from 'eslint-config-love'
import eslintPluginPrettierRecommended  from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  globalIgnores([
    "coverage/**",
    "dist/**",
    "!node_modules/",	
    "*.json",
    "jest.config.ts",
  ]),
  {
    files:['**/*.ts'],
    languageOptions: { globals: globals.node, },
  },
  {
    files:['**/*.ts'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: { tseslint },
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
      "@typescript-eslint/no-unnecessary-condition": "off",
      "@typescript-eslint/ban-ts-comment": "off",
    },
  },
  {
    ...love,
    files:['**/*.ts'],
  },
  eslintPluginPrettierRecommended,
])