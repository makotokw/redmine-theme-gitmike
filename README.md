Redmine gitmike theme
==============

This is github-like theme for Redmine. 
It is based on A1 theme version 1.0.3 by Kirill Bezrukov www.redminecrm.com.

[screenshot1]: http://dl.dropbox.com/u/8932138/screenshot/gitmike/gitmike_2013-07-12_0706.png "gitmike screenshot"

![gitmike screenshot][screenshot1]

## Installation

1. Download from https://github.com/makotokw/redmine-theme-gitmike/tags
1. Move to `redmine/public/theme/gitmike`

Or by using git:

```
cd redmine/public/theme
git clone git://github.com/makotokw/redmine-theme-gitmike.git gitmike
```

### Change theme

Open redmine on a browser and go to Administration > Settings > Display > Theme.

## Development

### Build Sass

#### development

```
cd sass
compass watch
```

#### release

```
cd sass
compass compile -e production --force
```

## License

GPL3

## Change Log

* r6 2013/11/23: Dashboard (@n-rodriguez). Fixed some issues #6 #7 #8 and #10 reported from @statschner
* r5 2013/07/21: Improvement Forms
* r4 2013/07/12: Tested in Redmine 2.3. Updated to look like GitHub. Added assing_to and author column style on Issue Table when login user's one by @chocoby.
* r3 2013/01/16: Tested in Redmine 2.2. Added count style and changed priority-{#id} to priority-{position_name} on Issue Table.
* r2 2012/09/20: Removed Japanese font style in master branch, and added ja branch for Japanese.
* r1 2012/04/12: Supported Redmine 1.3.2 
