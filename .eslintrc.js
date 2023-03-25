// prettier-ignore
module.exports = {
  root: true,
  extends: [
    "eslint:recommended", 
    "plugin:react/recommended",
    "plugin:import/recommended", 
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "jsx-quotes": 0,
    "semi": "error",
    "comma-dangle": 2,
    "react/prop-types": 2,
    "no-console": [ "error" ],
    "no-return-await": "warn",
    "no-await-in-loop": "warn",
    "no-unused-vars": [ "error" ],
    "react/jsx-uses-vars": "error",
    "quotes": [ "error", "double" ],
    "react/jsx-uses-react": "error",
    "react/button-has-type": "error",
    "react/react-in-jsx-scope": "off",
    "max-len": [ "error", { code: 170 } ],
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react/no-access-state-in-setstate": 2,
    "object-curly-spacing": [ "error", "always" ],
    "no-nonoctal-decimal-escape": 0,
    "no-unsafe-optional-chaining": 0
  },

  plugins: [],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    es2021: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
