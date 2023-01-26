module.exports = {
  root: true,
  defaultSeverity: 'error',
  plugins: ['stylelint-order', 'stylelint-less'],
  extends: [
    'stylelint-config-standard', // the standard shareable config for Stylelint
    'stylelint-config-html/html', // the shareable html config for Stylelint.
    'stylelint-config-html/vue', // the shareable vue config for Stylelint.
    'stylelint-config-recess-order', // use the clean order for properties
    'stylelint-config-prettier', // turn off any rules that conflict with Prettier
  ],
  rules: {
    'no-descending-specificity': null,
    'no-empty-source': null,
    'font-family-no-missing-generic-family-keyword': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
        ],
      },
    ],
    'function-no-unknown': null,
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'selector-no-vendor-prefix': null,
    'keyframes-name-pattern': null,
    'selector-class-pattern': null,
    'value-no-vendor-prefix': null,
    'rule-empty-line-before': ['always', { ignore: ['after-comment', 'first-nested'] }],
    'string-quotes': 'single',
    'at-rule-name-case': 'lower',
    indentation: [2, { severity: 'warning' }],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue', '*.html', '**/*.html'],
      customSyntax: 'postcss-html',
      rules: {
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['deep', 'global'] }],
        'selector-pseudo-element-no-unknown': [true, { ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'] }],
      },
    },
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
      rules: {
        'less/color-no-invalid-hex': true,
        'less/no-duplicate-variables': true,
      },
    },
  ],
};
