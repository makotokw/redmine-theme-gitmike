Redmine gitmike theme
==============

This is a github-like theme for Redmine.
It is based on A1 theme version 1.0.3 by Kirill Bezrukov www.redminecrm.com.

![gitmike screnshot](./screenshot.png)

## Installation

### Install theme

1. Download from https://github.com/makotokw/redmine-theme-gitmike/tags
2. Move to `redmine/public/theme/gitmike`

Or by using git:

```
cd redmine/public/theme
git clone https://github.com/makotokw/redmine-theme-gitmike.git gitmike
```

### Change theme

1. Open your redmine in a browser
2. Login as admin user
3. Go to ``Administration > Settings > Display``
4. Select ``Gitmike`` on ``Theme``

## Development

```
# Redmine 5.x or earliar
cd redmine/public/theme
# Redmine 6 or later
#cd redmine/theme
git clone https://github.com/makotokw/redmine-theme-gitmike.git gitmike
cd gitmike
yarn
# Start watch mode
yarn dev
# Or build once for production
yarn build
```

## License

GNU General Public License (GPL) Version 2

