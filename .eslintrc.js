module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],

  parser: 'babel-eslint',

  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },

  env: {
    jest: true,
    es6: true,
    node: true
  },

  plugins: ['standard', 'promise', 'react-native'],

  rules: {
    'accessor-pairs': 2,
    'arrow-spacing': [2, { before: true, after: true }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    camelcase: [2, { properties: 'never' }],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    curly: [2, 'multi-line'],
    'dot-location': [2, 'property'],
    'eol-last': 2,
    eqeqeq: [2, 'always', { null: 'ignore' }],
    'func-call-spacing': [2, 'never'],
    'handle-callback-err': [2, '^(err|error)$'],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [2, { before: true, after: true }],
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-constant-condition': [2, { checkLoops: false }],
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-duplicate-imports': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-global-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-negated-in-lhs': 2,
    'no-new': 2,
    'no-new-func': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-tabs': 2,
    'no-template-curly-in-string': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 2,
    'no-useless-rename': 2,
    'no-whitespace-before-property': 2,
    'no-with': 2,
    'object-property-newline': [2, { allowMultiplePropertiesPerLine: true }],
    'one-var': [2, { initialized: 'never' }],
    'operator-linebreak': [
      2,
      'after',
      { overrides: { '?': 'ignore', ':': 'ignore' } }
    ],
    'padded-blocks': [2, 'never'],
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react/no-unused-prop-types': [2],
    'react/no-children-prop': [0],
    'rest-spread-spacing': [2, 'never'],
    semi: [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 0,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [
      2,
      'always',
      {
        line: { markers: ['*package', '!', ','] },
        block: {
          balanced: true,
          markers: ['*package', '!', ','],
          exceptions: ['*']
        }
      }
    ],
    'unicode-bom': [2, 'never'],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any', { functionPrototypeMethods: true }],
    'yield-star-spacing': [2, 'both'],
    yoda: [2, 'never'],

    'standard/object-curly-even-spacing': [2, 'either'],
    'standard/array-bracket-even-spacing': [2, 'either'],
    'standard/computed-property-even-spacing': [0, 'even'],

    'promise/param-names': 2
  },

  globals: {
    beforeEach: true,
    document: false,
    spyOn: true,
    navigator: false,
    window: false,
    FileReader: true,
    localStorage: true,
    test: true,
    expect: true
  },

  settings: {
    react: {
      version: 'latest'
    }
  }
};
