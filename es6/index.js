import 'bas-meteor-utils';

// Import Init
import './init';

// Import libs
import './lib';

// Is Server
if (Meteor.isServer) {
    require('./server');
}

// Is Client
if (Meteor.isClient) {
    require('./client');
    exports.FB_API = BasMTR.FB_API;
}
