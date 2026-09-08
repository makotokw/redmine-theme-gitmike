module.exports = {
  customSyntax: 'postcss-scss',
  extends: [
    'stylelint-config-standard-scss',
  ],
  rules: {
    'scss/double-slash-comment-whitespace-inside': null,
    'scss/double-slash-comment-empty-line-before': null,
    'comment-whitespace-inside': null,
    'at-rule-empty-line-before': null,
    'declaration-empty-line-before': null,

    // for Redmine
    'selector-id-pattern': null,
    'selector-class-pattern': null,

    // `ignore: ['selectors-within-list']` exempts comma-separated selector
    // lists (e.g. `#errorExplanation, .nodata, .warning { ... }`) from the
    // check. This theme uses that pattern heavily to group unrelated
    // selectors under one declaration block, and enforcing a specificity
    // order within/across those lists would fight the pattern rather than
    // catch a real bug.
    'no-descending-specificity': [true, { ignore: ['selectors-within-list'] }]
  }
};
