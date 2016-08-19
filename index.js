/* jshint -W020 */
BasMTR = require('bas-meteor-utils').BasMTR;
/* jshint +W020 */
exports.BasMTR = BasMTR;

var _is_init = BasMTR.FB_API_isInit;

if(!_is_init){ require('./lib'); }

// Is Server
if(Meteor.isServer){
    if(!_is_init){ require('./server'); }
}

// Is Client
if(Meteor.isClient){
    if(!_is_init){ require('./client'); }
    exports.FB_API = BasMTR.FB_API;
}

_is_init = true;
