import express from "express";
import redisClient from "../redis.js";

const router = express.Router();

/**
 * GET /users
 * Cache first → Redis → DB
 */
router.get("/", async (req, res) => {
  try {
    // 1. Check Redis cache
    const cache = await redisClient.get("users");

    if (cache) {
      return res.json({
        source: "redis",
        data: JSON.parse(cache),
      });
    }

    // 2. Fake database
    const users = [
      { id: 1, name: "Dara" },
      { id: 2, name: "Sokha" },
      { id: 3, name: "Vannak" },
    ];

    // 3. Save to Redis (TTL = 60s)
    await redisClient.setEx("users", 60, JSON.stringify(users));

    res.json({
      source: "database",
      data: users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
