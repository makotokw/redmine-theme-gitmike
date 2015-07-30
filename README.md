Redmine gitmike theme
==============

This is github-like theme for Redmine.
It is based on A1 theme version 1.0.3 by Kirill Bezrukov www.redminecrm.com.

[screenshot1]: http://dl.dropbox.com/u/8932138/screenshot/gitmike/gitmike_2013-07-12_0706.png "gitmike screenshot"

![gitmike screenshot][screenshot1]

## Installation

### Install theme

1. Download from https://github.com/makotokw/redmine-theme-gitmike/tags
1. Move to `redmine/public/theme/gitmike`

Or by using git:

```
cd redmine/public/theme
git clone git://github.com/makotokw/redmine-theme-gitmike.git gitmike
```

### Change theme

1. Open your redmine on a browser
1. Login as admin user
1. Go to ``Administration > Settings > Display``
1. Select ``Gitmike`` on ``Theme``

## Development

```
cd redmine/public/theme
git clone git://github.com/makotokw/redmine-theme-gitmike.git gitmike
cd gitmike
gem install compass
npm install -g gulp
npm install
gulp debug
```

## License

GPL3

## Change Log

* **1.0.7** (2015/07/31): Fixed issue #25 in Redmine 3.0
* **1.0.6** (2014/04/05): Fixed some issues #12 #14 #17 #19 (from @rumpelsepp) #13 (from @timdp) #18 (from @cyberjunky)
* **1.0.5** (2013/11/23): Dashboard (@n-rodriguez). Fixed some issues #6 #7 #8 and #10 reported from @statschner
* **1.0.4** (2013/07/21): Improvement Forms
* **1.0.3** (2013/07/12): Tested in Redmine 2.3. Updated to look like GitHub. Added assing_to and author column style on Issue Table when login user's one by @chocoby.
* **1.0.2** (2013/01/16): Tested in Redmine 2.2. Added count style and changed priority-{#id} to priority-{position_name} on Issue Table.
* **1.0.1** (2012/09/20): Removed Japanese font style in master branch, and added ja branch for Japanese.
* **1.0.0** (2012/04/12): Supported Redmine 1.3.2
