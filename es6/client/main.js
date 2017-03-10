import _ from 'underscore';

const FB_API_ = ((mtr) => {

    // ------------------------------------------------------------------------
    // Constants
    // ------------------------------------------------------------------------

    const VERSION = BasMTR.Utils.VERSION;

    // ------------------------------------------------------------------------
    // Vars
    // ------------------------------------------------------------------------



    // ------------------------------------------------------------------------
    // Class Definition
    // ------------------------------------------------------------------------

    class FB_API_ {

        constructor() {

        }

        // Getters
        // ------------------------------------------------------------------------

        static get VERSION() {
            return VERSION;
        }

        // Public
        // ------------------------------------------------------------------------


        // Static
        // ------------------------------------------------------------------------

        static login(options, callback) {

            // Default login
            if (!mtr.isCordova || typeof facebookConnectPlugin === "undefined") {
                return mtr.loginWithFacebook(options, callback);
            }

            // support a callback without options
            if (!callback && typeof options === "function") {
                callback = options;
                options  = {
                    "requestPermissions": ["public_profile", "email", "user_friends"]
                };
            }

            // Native login
            facebookConnectPlugin.login(options.requestPermissions, function (res) {
                let opts = _.extend(_.pick(res.authResponse, ['accessToken', 'expiresIn', 'userID']), {methodName: "native-facebook"});
                Accounts.callLoginMethod({methodArguments: [opts], userCallback: callback});
            }, function (err) {
                console.error("err", err);
                callback(err, null);
            });
        }

        // Static Private
        // ------------------------------------------------------------------------


    }

    // ------------------------------------------------------------------------
    // Init
    // ------------------------------------------------------------------------

    // Methods
    mtr.methods({
        //...
    });

    // ------------------------------------------------------------------------
    // Meteor
    // ------------------------------------------------------------------------

    // Meteor startup
    mtr.startup(function () {
        //...
    });

    return FB_API_;

})(Meteor);

BasMTR.FB_API = FB_API_;
export default FB_API_;
