const express = require("express");
const axios = require("axios");
const Redis = require("ioredis");

const app = express();
const redis = new Redis({ host: "localhost", port: 6379 }); // Redis Docker container
const PORT = 3000;

// Example API to cache (we'll use JSONPlaceholder)
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Cache middleware
async function cacheMiddleware(req, res, next) {
  const { id } = req.params;
  const cacheKey = `post:${id}`;

  try {
    // Check Redis for cached data
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      console.log("Serving from cache 🚀");
      return res.send(JSON.parse(cachedData));
    }
    next(); // No cache → proceed to fetch
  } catch (err) {
    console.error("Cache error:", err);
    next();
  }
}

// Route: Get a post by ID (with caching)
app.get("/posts/:id", cacheMiddleware, async (req, res) => {
  const { id } = req.params;
  const cacheKey = `post:${id}`;

  try {
    // Fetch from API
    const response = await axios.get(`${API_URL}/${id}`);
    const data = response.data;

    // Save to Redis (expire after 1 hour = 3600 seconds)
    await redis.setex(cacheKey, 600, JSON.stringify(data));
    console.log("Serving from API ⚡");

    res.send(data);
  } catch (err) {
    res.status(500).send("Error fetching post");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});