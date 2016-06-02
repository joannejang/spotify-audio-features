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
       'Authorization': 'Bearer ' + 'BQDORwnAzdT1KMsF_d4NX5lVGmKnBCurEjbfgztdnp-e37KdsA9pzm634DYnqb5v5Cue94A5nr768ocGOkWg7LkNQ2X92U-TfxFjjHyeeXrcQ8U0Xqb5nqUeeqUwMmckG6-Ij6G_uEtNcIM'
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
