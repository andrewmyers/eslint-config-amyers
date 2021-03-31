module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  globals: {
    process: "readonly",
    __dirname: "readonly",
  },
  plugins: ["react", "react-hooks", "jsx-a11y"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },

        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      // If adding a typescript-eslint version of an existing ESLint rule,
      // make sure to disable the ESLint rule here.
      rules: {
        // 'tsc' already handles these
        "no-dupe-class-members": "off",
        "no-undef": "off",

        // Typescript specific rules
        "@typescript-eslint/consistent-type-assertions": "warn",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
      },
    },
  ],
  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  rules: {
    // https://eslint.org/docs/rules/
    eqeqeq: ["warn", "smart"],
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],

    // https://reactjs.org/docs/hooks-rules.html#eslint-plugin
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies

    // https://github.com/yannickcr/eslint-plugin-react
    "react/react-in-jsx-scope": "off", // React does not need to be in scope
    "react/forbid-foreign-prop-types": ["warn", { allowInPropTypes: true }],
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-pascal-case": ["warn", { allowAllCaps: true, ignore: [] }],
    "react/no-typos": "error",
    "react/style-prop-object": "warn",
    "react/prop-types": "off",
    "react/no-deprecated": "warn",

    // https://github.com/evcohen/eslint-plugin-jsx-a11y/tree/master/docs/rules
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        aspects: ["noHref", "invalidHref"],
      },
    ],
    "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
    "jsx-a11y/aria-props": "warn",
    "jsx-a11y/aria-proptypes": "warn",
    "jsx-a11y/aria-role": ["warn", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/img-redundant-alt": "warn",
    "jsx-a11y/no-access-key": "warn",
    "jsx-a11y/no-distracting-elements": "warn",
    "jsx-a11y/no-redundant-roles": "warn",
    "jsx-a11y/role-has-required-aria-props": "warn",
    "jsx-a11y/role-supports-aria-props": "warn",
    "jsx-a11y/scope": "warn",
    "jsx-a11y/no-onchange": "off",
  },
}
