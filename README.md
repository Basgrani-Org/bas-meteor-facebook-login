# Native Facebook SDK login for Meteor (v1.4+)

This package use [cordova-plugin-facebook4](https://github.com/Basgrani-Org/cordova-plugin-facebook4)

Documentation of the Cordova plugin [here](https://github.com/Basgrani-Org/cordova-plugin-facebook4)

## Install

```
npm install bas-meteor-facebook-login
```

## Setup

- Requirements:

```
meteor add accounts-facebook

meteor add cordova:cordova-plugin-facebook4@https://github.com/Basgrani-Org/cordova-plugin-facebook4.git#ee8aab56ee6c1f822dcab9ede1db1944100935b4
```

- Setup cordova plugin:

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
