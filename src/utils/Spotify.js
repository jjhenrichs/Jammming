const client_id = process.env.REACT_APP_CLIENT_ID;
const redirect_uri = "http://localhost:3000";

let url = "https://accounts.spotify.com/authorize";
url += "?response_type=token";
url += `&client_id=${client_id}`;
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
      id: track.album.id,
      album: track.album.name,
      artist: track.artists[0].name,
      song: track.name,
    }));
  },
};

export default Spotify;
