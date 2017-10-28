const OFF = 0;
const WARNING = 1;
const ERROR = 2;
const INDENT_SIZE = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:flowtype/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: ['babel', 'react', 'flowtype'],
  rules: {
    // Possible Errors <http://eslint.org/docs/rules/#possible-errors>
    'no-console': [
      WARNING,
      {
        allow: ['debug', 'warn', 'error']
      }
    ],
    'no-debugger': ERROR,
    'no-dupe-args': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': WARNING, // Almost certainly a bug
    'no-extra-semi': WARNING,
    'no-irregular-whitespace': WARNING,
    'no-unreachable': ERROR,
    'no-implicit-coercion': OFF, // Implicit coercion is often idiomatic
    'no-labels': [ERROR, { allowSwitch: true }], // Only allow in their natural environment - switch case
    'no-unused-expressions': OFF, // Breaks on `foo && foo.bar()` expression statements, which are common
    'no-useless-concat': WARNING, // Disallow concatenating string literals

    // Variables <http://eslint.org/docs/rules/#variables>
    'no-shadow-restricted-names': ERROR,
    'no-shadow': ERROR,
    'no-unused-vars': [WARNING, { args: 'none', varsIgnorePattern: '^_' }],
    'no-use-before-define': WARNING,

    // Stylistic Issues <http://eslint.org/docs/rules/#stylistic-issues>
    'array-bracket-spacing': WARNING,
    'block-spacing': WARNING,
    'brace-style': [WARNING, '1tbs', { allowSingleLine: true }],
    camelcase: [WARNING, { properties: 'always' }],
    'comma-dangle': [WARNING],
    'comma-spacing': [WARNING, { before: false, after: true }],
    'eol-last': WARNING,
    'keyword-spacing': WARNING,
    'no-trailing-spaces': WARNING,
    'semi-spacing': [WARNING, { before: false, after: true }],
    semi: [WARNING, 'always'],
    'space-before-blocks': [WARNING, 'always'], // require `if () {` instead of `if (){`
    'sort-keys': [OFF, 'asc', { caseSensitive: true, natural: false }],
    'spaced-comment': WARNING,
    // require `function foo()` instead of `function foo ()`
    'space-before-function-paren': [
      WARNING,
      { anonymous: 'never', named: 'never' }
    ],
    indent: [WARNING, INDENT_SIZE, { SwitchCase: 1 }],
    quotes: [WARNING, 'single'],
    'template-curly-spacing': WARNING,
    'object-curly-spacing': [WARNING, 'always'],

    // ECMAScript 6 <http://eslint.org/docs/rules/#ecmascript-6>
    'arrow-body-style': OFF,
    'arrow-spacing': [WARNING, { before: true, after: true }],
    'no-const-assign': ERROR, // It is also a runtime error
    'no-this-before-super': ERROR,
    'no-var': ERROR,
    'object-shorthand': WARNING,
    'prefer-const': WARNING,
    'prefer-rest-params': WARNING,
    'prefer-spread': WARNING,
    'prefer-template': ERROR,
    'rest-spread-spacing': WARNING,
    'sort-imports': OFF,

    // eslint-plugin-react <https://github.com/yannickcr/eslint-plugin-react>
    'react/jsx-pascal-case': ERROR,
    'react/no-danger': WARNING,
    'react/jsx-uses-react': ERROR,
    'react/jsx-uses-vars': ERROR,
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+' }
    ],
    'react/no-array-index-key': WARNING,
    'react/no-multi-comp': WARNING,
    'react/no-typos': ERROR,
    'react/prefer-stateless-function': WARNING,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-sort-props': OFF,

    // eslint-plugin-flowtype
    'flowtype/define-flow-type': WARNING,
    'flowtype/use-flow-type': WARNING
  }
};
