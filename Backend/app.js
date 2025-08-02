const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const allowedOrigins = [
  "https://intershala-frontend.onrender.com",
  "http://localhost:5173"
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like Postman) or in allowedOrigins
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

const data = require("./data.json");

app.get("/api/user", (req, res) => {
  try {
    res.json({
      name: data.name,
      referralCode: data.referralCode,
      donationsRaised: data.donationsRaised
    });
  } catch (err) {
    console.log("Error fetching user " + err);
  }
});

app.get("/api/leaderboard", (req, res) => {
  try {
    res.json(data.leaderboard);
  } catch (err) {
    console.log("Error fetching leaderboard " + err);
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
