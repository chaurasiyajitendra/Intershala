const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors({
  origin :'http://localhost:5173',
  methods: ["GET", "POST"]
}));

const data = require("./data.json");

app.get("/api/user", (req, res) => {
  try{
    res.json({
      name: data.name,
      referralCode: data.referralCode,
      donationsRaised: data.donationsRaised
    });
  }catch(err)
  {
    console.log('Error to fatching user ' + err);
  }
});

app.get("/api/leaderboard", (req, res) => {
  try{
    res.json(data.leaderboard);
  }catch(err){
    console.log("error to fatching leaderboadr" + err);
  }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


