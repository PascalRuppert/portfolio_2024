module.exports = {
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": [
      "warn",
      {
        tabWidth: 2,
        printWidth: 300,
        singleQuote: true,
        trailingComma: "es5",
        arrowParens: "avoid",
        semi: true,
      },
    ],
  },
};
