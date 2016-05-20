// var Spotify = require('spotify-web-api-js');
// var s = new Spotify();

var spotifyApi = new SpotifyWebApi();

spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
  if (err) { console.error(err); console.log("hello"); }
  else console.log('Artist albums', data);
});