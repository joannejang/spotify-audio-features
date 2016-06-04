//var OAuthToken = "BQAf2W0sc0djA1iREvdJFrV-MvkSCEWYuA4l3OK76mG2HcVHWXiRkfDp-p6pByn9VWx94Ma9vt9CDOGsYm3GnWe_BtmTzAFSOOivleUNJln4YIl36Oi69--qRl187aUG83k_0G6UtC05BR716kMa9zQ";
var accessToken = "BQCNG_Oe-EjCIyT6SkYFB7NrMzUr8TkKjh1I4nxZiQssWF1XD4Z__RqxwPR0SK-fNVGH8H5Rsgt8jGyPtWkOXdHSzVGyBIxe_onvbjpw7ySO5fn3QU1ScgV-BOl00wy3BfAQkeQ8mFHGqBDrkHPd9Y5F73wMzeU";
var localProxyApi = function (serverBasePath) {

  var getArtistRelatedArtists = function(artistId) {
    var url = serverBasePath + '/spotify/artists/' + artistId + '/related-artists';
    return $.ajax({
        url: url
    })
  };

  var getArtistTopTracks = function(artistId, country) {
    var url = serverBasePath + '/spotify/artists/' + artistId + '/top-tracks';
    return $.ajax({
        url: url,
        data: {
            country: country
        }
    })
  };

  var getArtist = function(artistId) {
    var url = 'https://api.spotify.com/v1/artists/' + artistId;
    //var url = serverBasePath + '/spotify/artists/' + artistId;
    return $.ajax({
        url: url
    })
  };

  var getArtists = function(artistIds) {
    var url = serverBasePath + '/spotify/artists?ids=' + artistIds;
    return $.ajax({
        url: url
    })
  };

  var searchArtists = function(q, params) {
    var url = serverBasePath + '/v1/search?type=artist';
    var data = params
    data['q'] = q
    data['type'] = 'artist'

    return $.ajax({
        url: url,
        data: data
    })
  };

  var searchTracks = function(q, params) {
    var url = serverBasePath + '/v1/search?type=track';
    var data = params
    data['q'] = q
    data['type'] = 'track'

    return $.ajax({
        url: url,
        data: data
    })
  };

  var getTrack = function(trackId) {
    var url = serverBasePath + '/v1/tracks/' + trackId;
    return $.ajax({
        url: url
    })
  };

  var getAudioFeatures = function(trackId) {
    var url = serverBasePath + '/v1/audio-features/' + trackId;
    return $.ajax({
      headers: {
       'Authorization': 'Bearer ' + accessToken//OAuthToken
      },
      url: url
    })
  };

  return {
    getArtistRelatedArtists: getArtistRelatedArtists,
    getArtist: getArtist,
    getArtists: getArtists,
    searchArtists: searchArtists,
    getArtistTopTracks: getArtistTopTracks,
    getAudioFeatures: getAudioFeatures,
    searchTracks: searchTracks,
    getTrack: getTrack
  }

};
