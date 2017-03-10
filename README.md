# Native Facebook SDK login for Meteor (v1.4.3+)

[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9EARMSN5WMDDY)

This package use [cordova-plugin-facebook4](https://github.com/Basgrani-Org/cordova-plugin-facebook4)

Documentation of the Cordova plugin [here](https://github.com/Basgrani-Org/cordova-plugin-facebook4)

## Install

```
meteor npm install bas-meteor-facebook-login
```

## Setup

- Requirements:

```
meteor add http
meteor add accounts-facebook
meteor add cordova:cordova-plugin-facebook4@https://github.com/Basgrani-Org/cordova-plugin-facebook4.git#ee8aab56ee6c1f822dcab9ede1db1944100935b4
```

- Setup cordova plugin (mobile-config.js):

```js
App.configurePlugin('cordova-plugin-facebook4', {
    APP_NAME: 'Name',
    APP_ID: '000000000000'
});
```

## Use

(Server)

```js
import 'bas-meteor-facebook-login';
```

(Client)

```js
import { FB_API } from 'bas-meteor-facebook-login';

// Login with Facebook
FB_API.login(function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log('login...');
    }
});
```

## Backers

### Maintainers

These amazing people are maintaining this project:

- [Basgrani](http://basgrani.com) - [view contributions](https://github.com/Basgrani-Org/bas-meteor-facebook-login/commits?author=Basgrani)

### Sponsors

No sponsors yet! Will you be the first?

[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9EARMSN5WMDDY)

### Contributors

These amazing people have contributed code to this project:

- [Basgrani](http://basgrani.com) - [view contributions](https://github.com/Basgrani-Org/bas-meteor-facebook-login/commits?author=Basgrani)

### Contribute

If you wish you can contribute to the development of this project:

- Contribute with your code

- [Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9EARMSN5WMDDY)

## License

- View the [LICENSE](https://github.com/Basgrani-Org/bas-meteor-facebook-login/blob/master/LICENSE.md)

## Contact

- dev@basgrani.com
