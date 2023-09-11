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
};

export default Spotify;
