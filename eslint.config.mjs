// @ts-check
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(eslintPluginPrettierRecommended, {
  rules: {
    "no-console": "off",
    "prettier/prettier": [
      "warn",
      {
        arrowParens: "always",
        semi: true,
        singleQuote: false,
        printWidth: 100,
        trailingComma: "none",
        endOfLine: "auto"
      }
    ]
  }
});
