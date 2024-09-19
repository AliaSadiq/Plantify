const Review = require("../models/social-review.model.js");
const SocialGroup = require("../models/socialgroup.model.js");

// Add a new review
// const addReview = async (req, res) => {
//   try {
//     const { rating, message, user } = req.body;
//     const socialGroup = await SocialGroup.findById(req.params.groupId);

//     if (socialGroup) {
//       const newReview = new Review({
//         rating,
//         message,
//         user,
//         socialGroup: req.params.groupId,
//       });

//       await newReview.save();
//       socialGroup.reviews.push(newReview._id);
//       await socialGroup.save();

//       res.status(201).json(newReview);
//     } else {
//       res.status(404).json({ message: 'Social group not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const addReview = async (req, res) => {
  try {
    const { rating, message, user } = req.body;
    const socialGroup = await SocialGroup.findById(req.params.groupId);

    if (socialGroup) {
      const newReview = new Review({
        rating,
        message,
        user, // Ensure 'user' is coming from req.body
        socialGroup: req.params.groupId,
      });

      await newReview.save();
      socialGroup.reviews.push(newReview._id);
      await socialGroup.save();

      res.status(201).json(newReview);
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    console.error("Error adding review:", error); // Log the error
    res.status(500).json({ error: error.message });
  }
};
// Get all reviews for a social group
const getReviews = async (req, res) => {
  try {
    const socialGroup = await SocialGroup.findById(req.params.groupId).populate('reviews');

    if (socialGroup) {
      res.status(200).json(socialGroup.reviews);
    } else {
      res.status(404).json({ message: 'Social group not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific review by ID
const getReview = async (req, res) => {
  try {
    const { groupId } = req.params;
    const socialGroup = await SocialGroup.findById(groupId);
    if (!socialGroup) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.status(200).json(socialGroup.reviews);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews', error });
  }
};

// Update a review
const updateReview = async (req, res) => {
  try {
    const { rating, message } = req.body;

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.reviewId,
      { rating, message },
      { new: true }
    );

    if (updatedReview) {
      res.status(200).json(updatedReview);
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a review
const deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.reviewId);

    if (review) {
      const socialGroup = await SocialGroup.findById(review.socialGroup);
      if (socialGroup) {
        socialGroup.reviews.pull(review._id);
        await socialGroup.save();
      }

      res.status(200).json({ message: 'Review deleted successfully' });
    } else {
      res.status(404).json({ message: 'Review not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};
