import eslintPlugin from "@typescript-eslint/eslint-plugin";
import eslintParser from "@typescript-eslint/parser";

export default [
    {
        files: ["**/*.{ts,tsx}"],
        languageOptions: {
            parser: eslintParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: "latest",
                sourceType: "module",
                project: "./tsconfig.eslint.json",
            },
        },
        plugins: {
            "@typescript-eslint": eslintPlugin,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    vars: "all",
                    args: "after-used",
                    ignoreRestSiblings: true,
                },
            ],
            "@typescript-eslint/strict-boolean-expressions": "error",
            "@typescript-eslint/no-floating-promises": "error",
            "@typescript-eslint/explicit-module-boundary-types": "warn",
            "no-console": "warn",
            eqeqeq: ["error", "always"],
        },
    },
];
