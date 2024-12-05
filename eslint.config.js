import globals from "globals";
import js from "@eslint/js";
import { configs as tsConfigs } from "@typescript-eslint/eslint-plugin";
import { configs as reactConfigs } from "eslint-plugin-react";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
    },
    rules: {
      "react/react-in-jsx-scope": "off",
    },
  },
  js.configs.recommended,
  tsConfigs.recommended,
  reactConfigs.recommended,
];
