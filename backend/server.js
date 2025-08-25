const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ CVBoost Backend is running");
});

// Example AI-like endpoint
app.post("/api/cv", (req, res) => {
  const { name, jobTitle } = req.body;
  res.json({
    message: `Hello ${name}, your CV for ${jobTitle} will be generated soon!`,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
