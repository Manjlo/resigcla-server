module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    "ecmaVersion": 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    // double quotes
    "quotes": "off",
    "no-console": "off",

    "no-regex-spaces": "off",

    "no-debugger": "off",

    // Removed rule "disallow unused variables" from recommended eslint rules
    "no-unused-vars": "off",

    "no-mixed-spaces-and-tabs": "off",

    "no-undef": "off",

    // Warn against template literal placeholder syntax in regular strings
    "no-template-curly-in-string": 1,

    // Warn if return statements do not either always or never specify values
    "consistent-return": 1,

    // Warn if no return statements in callbacks of array methods
    "array-callback-return": 1,

    // Require the use of === and !==
    "eqeqeq": 2,

    // Disallow the use of alert, confirm, and prompt
    "no-alert": 2,

    // Disallow the use of arguments.caller or arguments.callee
    "no-caller": 2,

    // Disallow null comparisons without type-checking operators
    "no-eq-null": 2,

    // Disallow the use of eval()
    "no-eval": 2,

    // Warn against extending native types
    "no-extend-native": 1,

    // Warn against unnecessary calls to .bind()
    "no-extra-bind": 1,

    // Warn against unnecessary labels
    "no-extra-label": 1,

    // Disallow leading or trailing decimal points in numeric literals
    "no-floating-decimal": 2,

    // Warn against shorthand type conversions
    "no-implicit-coercion": 1,

    // Warn against function declarations and expressions inside loop statements
    "no-loop-func": 1,

    // Disallow new operators with the Function object
    "no-new-func": 2,

    // Warn against new operators with the String, Number, and Boolean objects
    "no-new-wrappers": 1,

    // Disallow throwing literals as exceptions
    "no-throw-literal": 2,

    // Require using Error objects as Promise rejection reasons
    "prefer-promise-reject-errors": 2,

    "for-direction": 2,

    // Enforce return statements in getters
    "getter-return": 2,

    // Disallow await inside of loops
    "no-await-in-loop": 2,

    // Disallow comparing against -0
    "no-compare-neg-zero": 2,

    "no-catch-shadow": 1,

    // Disallow identifiers from shadowing restricted names
    "no-shadow-restricted-names": 2,

    // Enforce return statements in callbacks of array methods
    "callback-return": 2,

    // Require error handling in callbacks
    "handle-callback-err": 2,

    // Warn against string concatenation with __dirname and __filename
    "no-path-concat": 1,

    "max-len": "off",

    // Prefer using arrow functions for callbacks
    "prefer-arrow-callback": 1,

    "indent": ["error", 2],

    "object-curly-spacing": "off",

    // Return inside each then() to create readable and reusable Promise chains.


  },
  overrides: [
    {
      files: ["**/*.spec.*"],
      env: {
        mocha: true,
      },
      rules: {

      },
    },
  ],
  globals: {},
};
