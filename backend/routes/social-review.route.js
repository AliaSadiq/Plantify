const express = require("express");
const router = express.Router();
const { addReview, getReviews, getReview, updateReview, deleteReview } = require("../controllers/social-review.controller");

router.post("/:groupId/review", addReview);
router.get("/:groupId", getReviews);
router.get("/review/:reviewId", getReview);
router.put("/review/:reviewId", updateReview);
router.delete("/review/:reviewId", deleteReview);

module.exports = router;
