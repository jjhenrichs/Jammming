const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
// const redirect_uri = "http://localhost:3000/";
const redirect_uri = "https://jammming-jeffhenrichs.netlify.app/";

let accessToken;

console.log("Client ID:", process.env.REACT_APP_SPOTIFY_CLIENT_ID);
let authUrl =
  "https://accounts.spotify.com/authorize" +
  `?client_id=334852632e8f48958ecfcaddff502b60` +
  "&response_type=code" +
  "&scope=playlist-modify-public" +
  `&redirect_uri=${redirect_uri}`;

// Exchange code for access token
async function exchangeCodeForToken(code) {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: code,
      redirect_uri: redirect_uri,
      client_id: clientId,
    }),
  });
  return response.json();
}

// Handle the code on page load
const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get("code"); // Get the code from the URL

if (code) {
  exchangeCodeForToken(code).then((token) => {
    accessToken = token.access_token;
    window.history.replaceState({}, document.title, "/"); // Remove the code from the URL
  });
}

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    window.location = authUrl; // Redirect to Spotify authorization
  },
  async search(term) {
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const data = await response.json();

    return data.tracks.items.map((track) => ({
      id: track.id,
      album: track.album.name,
      artist: track.artists[0].name,
      song: track.name,
      uri: track.uri,
    }));
  },

  async savePlaylist(name, trackUris) {
    if (!name || !trackUris.length) {
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": `application/json`,
    };

    // Get the current user's id
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: headers,
    });
    const data = await response.json();
    const user_id = data.id;

    // Create the playlist
    const response_2 = await fetch(
      `https://api.spotify.com/v1/users/${user_id}/playlists`,
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify({ name: name }),
      },
    );
    const data_2 = await response_2.json();
    const playlist_id = data_2.id;

    // Add the tracks to the playlist
    const response_3 = await fetch(
      `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      {
        headers: headers,
        method: "POST",
        body: JSON.stringify({ uris: trackUris }),
      },
    );
    const data_3 = await response_3.json();

    return data_3;
  },
};

export default Spotify;
