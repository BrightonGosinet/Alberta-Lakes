const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ message: "lat and lon are required" });

  const key = process.env.OPENWEATHER_API_KEY;
  if (!key) return res.status(503).json({ message: "Weather service not configured" });

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
    );
    if (!response.ok) return res.status(502).json({ message: "Weather data unavailable" });
    const data = await response.json();
    res.json(data);
  } catch {
    res.status(502).json({ message: "Weather data unavailable" });
  }
});

module.exports = router;
