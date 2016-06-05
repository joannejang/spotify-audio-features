var target = window.self === window.top ? window.opener : window.parent;
	console.log("reached send-back");
var hash = window.location.hash;
if (hash) {
  var token = window.location.hash.split('&')[0].split('=')[1];
  target.postMessage(token, OAuthConfig.host);
}