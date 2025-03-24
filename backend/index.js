
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path"); 
require("dotenv").config();

const socialgroupRouter = require("./routes/socialgroup.route.js");
const campaignRoute = require("./routes/campaign.route.js");
const userRoute = require("./routes/user.route.js");
const adminRoute = require("./routes/admin.route.js");
const testimonialRoute = require("./routes/testimonial.route.js");
const campaignCommentRoute = require("./routes/campaign-comment.route.js");
const userMessageRoute = require("./routes/user-message.route.js");
const campaignReportRoute = require("./routes/campaign-report.route.js");
const sellerRoute = require("./routes/seller.route.js");
const donationRoutes = require("./routes/donation.route.js");
const reviewRoutes = require("./routes/social-review.route.js");
const questionRoutes = require("./routes/social-question.route.js");
const myPlantRoute = require("./routes/my-plant.route.js");
const teamRoute = require("./routes/team.route.js");
const plantDiaryRoute = require("./routes/plant-diary.route.js");
const requestCampaignRoute = require("./routes/request-campaign.route.js");
const socialMediaProfileRoute = require("./routes/social-media-profile.router.js");
const goalRoute = require("./routes/goal.route.js");
const socialPost = require("./routes/social-media-post.router.js");
const postComments = require("./routes/post-comments.route.js");
const productRoute = require("./routes/product.route.js");
const orderRoute = require("./routes/order.routes.js");

const app = express();
const rateLimit = require("express-rate-limit");

// Rate limiting (prevents abuse)
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour.",
});

// Middleware
app.use("/api/user", limiter);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(
//   cors({
//     origin: process.env.https://plantify-backend.vercel.app,
//     methods: ["POST", "GET", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );
const corsOptions = {
  origin: process.env.NODE_ENV === "production" 
     ? process.env.FRONTEND_URL 
     : ["http://localhost:3000", process.env.FRONTEND_URL,"https://plantify-backend.vercel.app"], 
  methods: ["POST", "GET", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
  credentials: true, 
};

app.use(cors(corsOptions));
// Routes
app.use("/api/campaigns", campaignRoute);
app.use("/api/socialgroup", socialgroupRouter);
app.use("/api/user", userRoute);
app.use("/api/testimonial", testimonialRoute);
app.use("/api/campaign-comment", campaignCommentRoute);
app.use("/api/user-message", userMessageRoute);
app.use("/api/campaign-report", campaignReportRoute);
app.use("/api/donations", donationRoutes);
app.use("/api/request-campaign", requestCampaignRoute);
app.use("/api/teams", teamRoute);
app.use("/api/sellers", sellerRoute);
app.use("/api/socialgroup-review", reviewRoutes);
app.use("/api/socialgroup-question", questionRoutes);
app.use("/api/admin", adminRoute);
app.use("/api/products", productRoute);
app.use("/api/orders", orderRoute);
app.use("/api/my-plants", myPlantRoute);
app.use("/api/plant-diaries", plantDiaryRoute);
app.use("/api/social-media", socialMediaProfileRoute);
app.use("/api/goals", goalRoute);
app.use("/api/post", socialPost);
app.use("/api/post-comment", postComments);

app.get("/", (req, res) => {
  res.send("Welcome to Plantify Backend!");
});

// Database connection and server start
mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to database!");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Connection failed!", error);
  });
