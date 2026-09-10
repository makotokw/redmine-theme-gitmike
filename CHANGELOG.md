## 2.0.0 (2026-xx-xx)

New features:
  - Support Redmine 6.0

Breaking changes:
  - Removed legacy browser and IE-specific CSS hacks

Development:
  - Replaced the legacy Gulp, Node Sass, and Compass build pipeline with Vite, Dart Sass, PostCSS, and Autoprefixer
  - Added SCSS linting with stylelint and stylelint-config-standard-scss
  - Modernized Sass sources for Dart Sass, including module-based color helpers and current CSS syntax
  - Removed the Gulp development workflow; use `yarn dev`, `yarn build`, and `yarn lint:scss`
  - Development now requires Node.js 20.19 or later, or Node.js 22.12 or later
  - Upgraded Yarn to v4 and configured it through Corepack

## 1.2.1 (2021-04-10)

New features:
  - Support Redmine 4.2

Bugfixes: 
  - Fixed the issue of huge left 300 px padding #43
  - Fixed the issue of inline-flex header #44
  - Fixed issue #42 for select_to_select2 plugin

Development:
- Replaced Ruby Sass and Compass with Node Sass

## 1.2.0 (2019-10-01)

New features:
  - Support Redmine 4.0

## 1.1.1 (2017-12-30)

Bugfixes:
  - Fixed issue #36 for Redmine 3.4 and fixed #38 for the Easy Gantt plugin

## 1.1.0 (2016/10/27)

Bugfixes:
  - Fixed some issues #31 #32 (from @addow) and improved wiki to be close to GitHub

## 1.0.9 (2016-07-10)

Bugfixes:
  - Fixed some issues #27 #28 for Redmine 3.3

## 1.0.8 (2016-06-23)

New features:
  - Support new menu item in Redmine 3.3

## 1.0.7 (2015-07-31)

Bugfixes:
  - Fixed issue #25 in Redmine 3.0

## 1.0.6 (2014-04-05)

Bugfixes:
  - Fixed some issues #12 #14 #17 #19 (from @rumpelsepp) #13 (from @timdp) #18 (from @cyberjunky)

## 1.0.5 (2013-11-23)

Bugfixes:
  - Dashboard (@n-rodriguez). 
  - Fixed some issues #6 #7 #8 and #10 reported from @statschner

## 1.0.4 (2013-07-21)

New features:
  - Improvement Forms

## 1.0.3 (2013-07-12)

New features:
  - Tested in Redmine 2.3
  - Updated to look like GitHub
  - Added assign_to and author column style on Issue Table when login user's one by @chocoby

## 1.0.2 (2013-01-16)

New features:
  - Tested in Redmine 2.2
  - Added count style and changed priority-{#id} to priority-{position_name} on Issue Table

## 1.0.1 (2012-09-20)

Development:
  - Removed Japanese font style in the master branch and added ja branch for Japanese

## 1.0.0 (2012-04-12)

New features:
  - Supported Redmine 1.3.2
