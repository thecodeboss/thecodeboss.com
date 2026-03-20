const globals = require("globals");
const tseslint = require("@typescript-eslint/eslint-plugin");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const reactRefresh = require("eslint-plugin-react-refresh").default;

module.exports = [
  {
    ignores: [
      "**/dist/**",
      "**/node_modules/**",
      "bun.lockb",
      "eslint.config.cjs",
    ],
  },
  ...tseslint.configs["flat/strict"],
  ...tseslint.configs["flat/stylistic"],
  {
    files: ["frontend/src/**/*.{ts,tsx}"],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: globals.browser,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["frontend/src/**/*.{ts,tsx}"],
    ...react.configs.flat["jsx-runtime"],
  },
  {
    files: ["frontend/src/**/*.{ts,tsx}"],
    ...reactHooks.configs.flat.recommended,
  },
  {
    files: ["frontend/src/**/*.{ts,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["frontend/src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["frontend/vite.config.ts", "infra/**/*.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
