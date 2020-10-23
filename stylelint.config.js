module.exports = {
  plugins: ["stylelint-scss", "stylelint-order"],
  extends: [
    "stylelint-config-recommended-scss",
    "stylelint-prettier/recommended",
  ],
  rules: {
    "order/properties-alphabetical-order": true,
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "function",
          "if",
          "for",
          "each",
          "include",
          "mixin",
          "content",
        ],
      },
    ],
  },
}
