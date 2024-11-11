const mongoose = require("mongoose");
const { Schema } = mongoose;
const PostSchema = new Schema({
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    caption: String,
    image: String,
    video: String,
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
    postType: {
      type: String,
      enum: ['simple', 'adoption'],
      required: true,
      validate: {
        validator: function(value) {
          return !(this.isSocialGroupPost && value === 'adoption');
        },
        message: 'Social Group posts can only be simple posts.',
      },
    },
    isSocialGroupPost: {
      type: Boolean,
      default: false, // False means the post is created as a regular user; true means it’s a social group post.
    },
    // Adoption-specific fields (only applicable if postType is 'adoption')
    species: { type: String, required: function() { return this.postType === 'adoption'; } },
    size: { type: String, required: function() { return this.postType === 'adoption'; } },
    diseases: String,
    fertilizerUsed: String,
    isAdopted: { type: Boolean, default: false },
    adoptionRequests: [
      {
        type: Schema.Types.ObjectId,
        ref: 'AdoptionRequest',
      },
    ],
  }, { timestamps: true });
  
  const Post = mongoose.model("Post", PostSchema);
  