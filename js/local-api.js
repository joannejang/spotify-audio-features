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
       'Authorization': 'Bearer ' + 'BQDnJoSeH16ITXjG19hOqc4y1n5_W52PyaYg10d1MnEte1n3JJKcDrZDpsq5aBgTP4kvp-DnOex8bX06qBM2nYoEzus9snzl_imAx6YHZzxD_LKyOAcCo4wKylKfeco1_ygv3vQ2VZ335gY'
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
