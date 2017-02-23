const SpotifyWebApi = require('spotify-web-api-node');

const spotify = new SpotifyWebApi();


spotify.searchTracks('thousand miles', {}, (err, results) => {
  if (err) {
    throw err;
  }

  console.log(results.body.tracks.items[0].name);
  console.log(results.body.tracks.items[0].preview_url);
});

console.log('LAST LINE');
