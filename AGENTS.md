# AGENTS.md

This file provides guidance to AI coding agents when working with code in this repository.

## What this is

Gitmike is a GitHub-styled theme for Redmine, based on the A1 theme. It is a pure SCSS/CSS theme: there is no JavaScript application code, no Ruby application code, and no test suite. The main deliverable is `stylesheets/application.css`, compiled from `sass/application.scss`.

## Commands

```sh
yarn                  # install dependencies
yarn dev              # vite build --watch; rebuilds stylesheets/application.css on save
yarn build            # one-off production build
yarn lint:scss        # stylelint sass/**/*.scss
yarn lint:scss:fix    # stylelint --fix
```

## Build Architecture

- `vite.config.js` compiles `sass/application.scss` to `stylesheets/application.css`.
- The compiled CSS is a single non-code-split, non-minified file with a deterministic filename and no hash.
- A Rollup plugin in `vite.config.js` prepends the contents of `header.css` (theme metadata comment) to the compiled output on every build. Do not add that banner manually to `application.scss`.
- `header.css` is Redmine's actual theme entry point. It imports the compiled `stylesheets/application.css` through the theme's public `../../../stylesheets/application.css` path. Redmine loads `header.css`, not `application.scss`, directly.
- PostCSS (`postcss.config.js`) runs Autoprefixer using the `.browserlistrc` targets, currently just `defaults`.
- `stylesheets/application.css` is a committed build artifact. Do not hand-edit it; regenerate it with `yarn build` or `yarn dev`.

## Sass Structure

`sass/application.scss` is the entry point and contains no rules of its own. It imports shared foundations first, then Redmine features, optional plugins, and responsive overrides. This order is load-bearing because it determines the cascade in the compiled CSS.

When adding rules for a specific Redmine area, prefer extending the matching `_<area>.scss` partial instead of adding more inline rules to `application.scss`.

- `_variables.scss`: fonts, colors, and spacing tokens used across partials.
- `_mixins.scss`: shared mixins, including gradients, grid helpers, and GitHub-style chrome mixins such as `github-header` and `github-page-head`.
- Other root `_*.scss` files are single-purpose partials named after a Redmine feature or shared concern, such as forms, tables, components, issues, wiki, projects, settings, responsive, mainmenu, and login.
- `_base.scss` holds global/base rules (element defaults, layout, header, sidebar, footer, flash messages, and headings). `_components.scss` holds reusable UI such as boxes, context menus, tooltips, and modals.
- `_plugins.scss` is the single plugin entry point. Plugin-specific rules live under `sass/plugins/`, one partial per plugin or tightly coupled plugin family.

Use the modern `sass:color` module (`color.mix`, `color.adjust`) in new Sass code. Avoid deprecated global Sass color functions.

The codebase still uses legacy `@import` syntax throughout instead of `@use`/`@forward`. `vite.config.js` intentionally silences Sass's `@import` deprecation warning. Do not migrate imports piecemeal; treat that as a separate deliberate cleanup.

## Stylelint

The Stylelint config is `.stylelintrc.cjs`, extending `stylelint-config-standard-scss` with `customSyntax: postcss-scss`.

Notable intentional deviations:

- `selector-id-pattern` and `selector-class-pattern` are disabled because this theme must target Redmine's core CSS IDs and classes, which do not follow a naming convention controlled by Gitmike.
- `no-descending-specificity` is enabled with `ignore: ['selectors-within-list']` (this exempts comma-separated selector-list rules, which this theme uses heavily for grouped declarations, from the check).
- A handful of remaining violations are caused by Redmine-generated fixed ID selectors (`#header`, `#top-menu`, `#main-menu`) whose higher specificity intentionally overrides the general-purpose selectors declared later in the same partial — the general-purpose selector on the losing side of each comparison carries a `// stylelint-disable-next-line no-descending-specificity` comment immediately above it. **Do not "clean up" these comments or try to restructure the ID selectors that cause them** — in particular, do not wrap the ID in `:where()` to lower its specificity: that silently changes cascade behavior (a later, equal-specificity general rule starts winning over the ID selector's intended override). Note that `no-descending-specificity` is evaluated per file, so a comment and the higher-specificity ID rule it defends against must be in the same partial for the check to see them.
- `no-invalid-position-at-import-rule` is enabled (inherited from `stylelint-config-standard-scss`). `sass/application.scss` must stay a pure `@import` list with no rules before the imports; add new global rules to `_base.scss` (or the matching area partial), never inline in `application.scss`.

## Verification

There is no standalone browser preview for this theme. Redmine serves the HTML, so visual verification requires a running Redmine instance with this theme installed and selected in `Administration > Settings > Display`.

For build-level verification, run:

```sh
yarn build
yarn lint:scss
```
