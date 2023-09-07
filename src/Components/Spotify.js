import React from "react";

// Create a code verifier

// Generates a random string for the code verifier
function generateRandomString(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
}

// Transform (hash) code verifier using SHA-256 algorithm. This is the value that will be sent to
// within the user authorization request.
async function generateCodeChallenge(codeVerifier) {
  function base64encode(string) {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const digest = await window.crypto.subtle.digest("SHA-256", data);

  return base64encode(digest);
}

// Make a GET request to the /authorize endpoint
const clientId = "YOUR_CLIENT_ID";
const redirectUri = "http://localhost:8080";

let codeVerifier = generateRandomString(128);

generateCodeChallenge(codeVerifier).then((codeChallenge) => {
  let state = generateRandomString(16);
  let scope = "user-read-private user-read-email";

  localStorage.setItem("code_verifier", codeVerifier);

  let args = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    scope: scope,
    redirect_uri: redirectUri,
    state: state,
    code_challenge_method: "S256",
    code_challenge: codeChallenge,
  });

  window.location = "https://accounts.spotify.com/authorize?" + args;
});
