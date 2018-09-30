'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-undef */


var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FB_API_ = function (mtr) {
  // ------------------------------------------------------------------------
  // Constants
  // ------------------------------------------------------------------------

  var VERSION = BasMTR.Utils.VERSION;

  // ------------------------------------------------------------------------
  // Vars
  // ------------------------------------------------------------------------


  // ------------------------------------------------------------------------
  // Class Definition
  // ------------------------------------------------------------------------

  var FB_API_ = function () {
    function FB_API_() {
      _classCallCheck(this, FB_API_);
    }

    _createClass(FB_API_, null, [{
      key: 'login',


      // Public
      // ------------------------------------------------------------------------


      // Static
      // ------------------------------------------------------------------------

      value: function login(options, callback) {
        // Default login
        if (!mtr.isCordova || typeof facebookConnectPlugin === 'undefined') {
          return mtr.loginWithFacebook(options, callback);
        }

        // support a callback without options
        if (!callback && typeof options === 'function') {
          callback = options;
          options = {
            requestPermissions: ['public_profile', 'email', 'user_friends']
          };
        }

        // Native login
        facebookConnectPlugin.login(options.requestPermissions, function (res) {
          var opts = _underscore2.default.extend(_underscore2.default.pick(res.authResponse, ['accessToken', 'expiresIn', 'userID']), { methodName: 'native-facebook' });
          Accounts.callLoginMethod({ methodArguments: [opts], userCallback: callback });
        }, function (err) {
          console.error('err', err);
          callback(err, null);
        });
      }

      // Static Private
      // ------------------------------------------------------------------------

    }, {
      key: 'VERSION',

      /* constructor() {
       } */

      // Getters
      // ------------------------------------------------------------------------

      get: function get() {
        return VERSION;
      }
    }]);

    return FB_API_;
  }();

  // ------------------------------------------------------------------------
  // Init
  // ------------------------------------------------------------------------

  // Methods


  mtr.methods({
    // ...
  });

  // ------------------------------------------------------------------------
  // Meteor
  // ------------------------------------------------------------------------

  // Meteor startup
  mtr.startup(function () {
    // ...
  });

  return FB_API_;
}(Meteor);

BasMTR.FB_API = FB_API_;
exports.default = FB_API_;
