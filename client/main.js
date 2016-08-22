_ = require('underscore');

// FB_API
(function (mtr) {
    // Set start point
    if(!BasMTR.FB_API){ BasMTR.FB_API = {}; }
    var _this = function(){return BasMTR.FB_API;}();

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

    // Init only one once
    _this.init = function() {
        //...
    };

    // Meteor startup
    mtr.startup(function () {
        // ...
    });

    // Init
    if(!_this.is_init){_this.init();_this.is_init = true;}

}( Meteor ));
