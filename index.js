const axios = require('axios');

async function getProfile(username, apiKey) {
  if (!username || !apiKey) throw new Error("Username and API key are required");

  const url = `https://api.scrapingdog.com/instagram/profile?api_key=${apiKey}&username=${username}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data || err.message);
  }
}

async function getPosts(profileId, apiKey, nextPageToken = '') {
  if (!profileId || !apiKey) throw new Error("Profile ID and API key are required");

  let url = `https://api.scrapingdog.com/instagram/posts?api_key=${apiKey}&id=${profileId}`;
  if (nextPageToken) {
    url += `&next_page_token=${nextPageToken}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data || err.message);
  }
}

module.exports = {
  getProfile,
  getPosts,
};
