export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "header-max-length": [2, "always", 100],
    "body-max-line-length": [0, "never"],
    "footer-max-line-length": [0, "never"],
    "subject-full-stop": [0, "never", "."],
    "subject-case": [0, "never", ["upper-case"]],
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "chore", "docs", "style", "refactor", "perf", "test"],
    ],
  },
};
