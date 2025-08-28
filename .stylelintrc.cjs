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

    // TODO: enable these rules
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null
  }
};
