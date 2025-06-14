const { getProfile, getPosts } = require('./index');
require('dotenv').config();

const API_KEY = process.env.SCRAPINGDOG_API_KEY;

if (!API_KEY) {
  console.error("❌ Missing API key. Set SCRAPINGDOG_API_KEY in .env file.");
  process.exit(1);
}

getProfile('instagram', API_KEY)
  .then(data => console.log('Profile:', data))
  .catch(err => console.error('Profile error:', err));

getPosts('13460080', API_KEY)
  .then(data => console.log('Posts:', data))
  .catch(err => console.error('Posts error:', err));
