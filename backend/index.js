const express = require("express");
const mongoose = require("mongoose");
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const socialgroupRouter = require("./routes/socialgroup.route.js");
const campaignRoute = require("./routes/campaign.route.js");
const adminRoute = require("./routes/admin.route.js");
const userRoute = require("./routes/user.route.js");
const testimonialRoute = require("./routes/testimonial.route.js");
const campaignCommentRoute = require("./routes/campaign-comment.route.js");
const userMessageRoute = require("./routes/user-message.route.js");
const campaignReportRoute = require("./routes/campaign-report.route.js");
const sellerRoute = require("./routes/seller.route.js");
const donationRoutes = require('./routes/donation.route.js')
const reviewRoutes = require("./routes/social-review.route.js");
const questionRoutes = require("./routes/social-question.route.js");
const teamRoute = require("./routes/team.route.js");
const requestCampaignRoute = require("./routes/request-campaign.route.js");
const app = express();
const rateLimit = require('express-rate-limit');
//rate-limiting (checking)
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "too many requests from this IP has been recieved, please try again in an hour."
}) 
app.get("/",(req,res) => {
  res.json("Hi hello");
})
//applying the rate limiting on a route.
app.use('/api/user', limiter);

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/campaigns", campaignRoute);
app.use("/api/admin", adminRoute);
app.use("/api/socialgroup", socialgroupRouter);
app.use("/api/user", userRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/campaign-comment", campaignCommentRoute);
app.use("/api/user-message", userMessageRoute);
app.use("/api/campaign-report", campaignReportRoute);
app.use("/api/donations",donationRoutes)
app.use("/api/request-campaign", requestCampaignRoute);
app.use("/api/sellers",sellerRoute);
app.use("/api/socialgroup-review", reviewRoutes);
app.use("/api/socialgroup-question", questionRoutes);
app.use("/api/socialteams", teamRoute);

//plant of the season call (web scrapping) (garden.org)
app.get('/plants-of-the-season', async (req, res) => {
  try {
      const { data } = await axios.get('https://garden.org/plants/');
      const $ = cheerio.load(data);
      let plants = [];

      // Example of scraping plant data
      $('.plant-card').each((i, elem) => {
          let plant = {
              name: $(elem).find('.plant-name').text(),
              image: $(elem).find('img').attr('src'),
              description: $(elem).find('.plant-description').text()
          };
          plants.push(plant);
      });

      res.json(plants);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error fetching plant data');
  }
});

//connection
mongoose
.connect('mongodb://farwa:006OyU1ZCZhowFSt@ac-o9umohz-shard-00-00.uhcz40u.mongodb.net:27017,ac-o9umohz-shard-00-01.uhcz40u.mongodb.net:27017,ac-o9umohz-shard-00-02.uhcz40u.mongodb.net:27017/Plantify?ssl=true&replicaSet=atlas-jvykwq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=BackendDB') 
//.connect('mongodb+srv://farwa:006OyU1ZCZhowFSt@backenddb.uhcz40u.mongodb.net/Plantify?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
