module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "linebreak-style": 0,
    "no-undef": "off",
    "no-unused-expressions": "off",
    "jsx-a11y/label-has-associated-control": "off",
  },
};
