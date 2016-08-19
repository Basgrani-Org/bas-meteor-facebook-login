_ = require('underscore');

// Set start point
var _start_point = BasMTR;

// FB_API
(function (mtr) {
    _start_point.FB_API = {};
    var _this = function(){return _start_point.FB_API;}();

    _this.login = function(options, callback) {

        // Default login
        if(!mtr.isCordova || typeof facebookConnectPlugin === "undefined"){
            return mtr.loginWithFacebook(options, callback);
        }

        // support a callback without options
        if (!callback && typeof options === "function") {
            callback = options;
            options = {
                "requestPermissions": ["public_profile", "email", "user_friends"]
            };
        }

        // Native login
        facebookConnectPlugin.login(options.requestPermissions, function(res) {
            var opts = _.extend(_.pick(res.authResponse, ['accessToken', 'expiresIn', 'userID']), { methodName: "native-facebook" });
            Accounts.callLoginMethod({methodArguments: [opts], userCallback: callback});
        }, function(err){
            console.error("err", err);
            callback(err, null);
        });
    };

    // Meteor Init
    _this.mtr_init = function() {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // Init
        _this.mtr_init();
    });

}( Meteor ));
