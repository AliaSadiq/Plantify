const express = require("express");
const mongoose = require("mongoose");
// const Product = require("./models/product.model.js");
const campaignRoute = require("./routes/campaign.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/campaigns", campaignRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://farwa:006OyU1ZCZhowFSt@backenddb.uhcz40u.mongodb.net/Plantify?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });