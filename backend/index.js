const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const socialgroupRouter = require("./routes/socialgroup.route.js");
const campaignRoute = require("./routes/campaign.route.js");
const userRoute = require("./routes/user.route.js");
const testimonialRoute = require("./routes/testimonial.route.js");
const campaignCommentRoute = require("./routes/campaign-comment.route.js");
const userMessageRoute = require("./routes/user-message.route.js");
const campaignReportRoute = require("./routes/campaign-report.route.js");
const sellerRoute = require("./routes/seller.route.js");
const donationRoutes = require('./routes/donation.route.js')
const reviewRoutes = require("./routes/social-review.route.js");
const questionRoutes=require("./routes/social-question.route.js");
const app = express();
const rateLimit = require('express-rate-limit');

//rate-limiting (checking)
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "too many requests from this IP has been recieved, please try again in an hour."
}) 

//applying the rate limiting on a route.
app.use('/api/user', limiter);

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// routes
app.use("/api/campaigns", campaignRoute);
app.use("/api/socialgroup", socialgroupRouter);
app.use("/api/user", userRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/campaign-comment", campaignCommentRoute);
app.use("/api/user-message", userMessageRoute);
app.use("/api/campaign-report", campaignReportRoute);
app.use("/api/donations",donationRoutes);
app.use("/api/sellers",sellerRoute);
app.use("/api/socialgroup-review", reviewRoutes);
app.use("/api/socialgroup-question", questionRoutes);

//connection
mongoose
  .connect('mongodb+srv://farwa:006OyU1ZCZhowFSt@backenddb.uhcz40u.mongodb.net/Plantify?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log("Connected to database!");
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });