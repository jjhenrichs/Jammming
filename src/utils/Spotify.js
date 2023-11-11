const clientId = "334852632e8f48958ecfcaddff502b60";
const redirect_uri = "http://localhost:3000/";
// const redirect_uri = "https://jammming-jeffhenrichs.netlify.app/";

let url = "https://accounts.spotify.com/authorize";
url += `?client_id=334852632e8f48958ecfcaddff502b60`;
url += "&response_type=token";
url += "&scope=playlist-modify-public";
url += `&redirect_uri=${redirect_uri}`;

let accessToken;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }

    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    if (accessTokenMatch && expiresInMatch) {
      accessToken = accessTokenMatch[1];
      const expiresIn = Number(expiresInMatch[1]);
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/"); // This clears the parameters, allowing us to grab a new access token when it expires.
      return accessToken;
    } else {
      window.location = url;
    }
  },
  async search(term) {
    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
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
      }
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
      }
    );
    const data_3 = await response_3.json();

    return data_3;
  },
};

export default Spotify;
