import axios from "axios";

const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_API_URL = "https://api.spotify.com/v1";

const clientId = "0b41bad8db724de6b30b91b8001a9616";
const clientSecret = "4ad717c43ec441b3ad79b74511aa32d8";

let accessToken = null;

// Function to get access token
const getAccessToken = async () => {
  if (accessToken) return accessToken;

  const response = await axios.post(
    SPOTIFY_AUTH_URL,
    new URLSearchParams({
      grant_type: "client_credentials",
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      },
    }
  );
  accessToken = response.data.access_token;
  return accessToken;
};

// Function to fetch artist data
export const getArtistData = async (artistId) => {
  const token = await getAccessToken();
  const response = await axios.get(`${SPOTIFY_API_URL}/artists/${artistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
