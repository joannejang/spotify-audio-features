var OAuthConfig = (function() {
  'use strict';

  var clientId = '89e8853e6b3f48318c38c9c6b7ded1c7';
  var redirectUri;
  //if (location.host === 'localhost:8000') {
    redirectUri = 'http://localhost:8000/callback.html';
 // } else {
   // redirectUri = callback.html;
 // }
  var host = /http[s]?:\/\/[^/]+/.exec(redirectUri)[0];
  return {
    clientId: clientId,
    redirectUri: redirectUri,
    host: host
  };
})();