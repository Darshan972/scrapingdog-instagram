# scrapingdog-instagram

A lightweight Node.js wrapper for Scrapingdog's **Instagram Scraper API**, supporting both:
- [Instagram Profile Scraper](https://docs.scrapingdog.com/instagram-scraper-api/instagram-profile-scraper)
- [Instagram Posts API](https://docs.scrapingdog.com/instagram-scraper-api/instagram-posts-api)

---

## 📦 Installation

```bash
npm install scrapingdog-instagram
```

---

## 🔑 Requirements

- A [Scrapingdog](https://www.scrapingdog.com/) API key
- For `getPosts`, you need the internal **Instagram profile ID** (retrievable via `getProfile`)

---

## ✨ Usage

```js
const scrapingdog = require('scrapingdog-instagram');

// Get Instagram profile details
scrapingdog.getProfile('instagram', 'YOUR_API_KEY')
  .then(profile => console.log(profile))
  .catch(console.error);

// Get Instagram posts using profile ID
scrapingdog.getPosts('13460080', 'YOUR_API_KEY')
  .then(posts => console.log(posts))
  .catch(console.error);
```

Optional: Use `next_page_token` for paginated results:

```js
scrapingdog.getPosts('13460080', 'YOUR_API_KEY', 'QVFER3...')
```

---

## 🧩 API

### `getProfile(username, apiKey)`
Fetch public Instagram profile data.

| Param      | Type   | Description              |
|------------|--------|--------------------------|
| `username` | string | Instagram username       |
| `apiKey`   | string | Your Scrapingdog API key |

---

### `getPosts(profileId, apiKey, nextPageToken = '')`
Fetch latest Instagram posts for a user ID.

| Param            | Type   | Description                            |
|------------------|--------|----------------------------------------|
| `profileId`      | string | Internal Instagram user ID             |
| `apiKey`         | string | Your Scrapingdog API key               |
| `nextPageToken`  | string | Optional token for paginated results   |

---

## ⚠️ Disclaimer

This package is not affiliated with Instagram.  
It simply wraps [Scrapingdog’s official Instagram APIs](https://docs.scrapingdog.com/).

---

## 📄 License

MIT
