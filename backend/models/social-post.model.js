// const mongoose = require("mongoose");
// const { Schema } = mongoose;

// const PostSchema = mongoose.Schema({
//   author: {
//     type: Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   caption: String,
//   images: {
//     type: [String],
//     validate: {
//       validator: function(arr) {
//         return arr.length <= 3;
//       },
//       message: 'You can upload a maximum of 3 images.',
//     },
//   },
//   video: {
//     type: String,
//     validate: {
//       validator: function() {
//         return !(this.images && this.images.length > 0 && this.video);
//       },
//       message: 'You can only upload either images or a video, not both.',
//     },
//   },
//   likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
//   comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
//   postType: {
//     type: String,
//     enum: ['simple', 'adoption'],
//     required: true,
//     validate: {
//       validator: function(value) {
//         return !(this.isSocialGroupPost && value === 'adoption');
//       },
//       message: 'Social Group posts can only be simple posts.',
//     },
//   },
//   isSocialGroupPost: { type: Boolean, default: false },
//   species: { type: String, required: function() { return this.postType === 'adoption'; } },
//   size: { type: String, required: function() { return this.postType === 'adoption'; } },
//   diseases: String,
//   fertilizerUsed: String,
//   isAdopted: { type: Boolean, default: false },
//   adoptionRequests: [{ type: Schema.Types.ObjectId, ref: 'AdoptionRequest' }],
// }, { timestamps: true });

  
//   const Post = mongoose.model("Post", PostSchema);

//   module.exports = Post;
const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  caption: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  images: {
    type: [String],
    validate: {
      validator: function(arr) {
        return arr.length <= 3 && !(arr.length > 0 && this.video);
      },
      message: 'You can upload a maximum of 3 images, or only a video, not both.',
    },
  },
  video: {
    type: String,
    validate: {
      validator: function() {
        return !(this.images && this.images.length > 0 && this.video);
      },
      message: 'You can only upload either images or a video, not both.',
    },
  },
  postType: { type: String, enum: ['simple', 'adoption'], required: true },
  species: { type: String, required: function() { return this.postType === 'adoption'; } },
  size: { type: String, required: function() { return this.postType === 'adoption'; } },
  fertilizerUsed: String,
  isAdopted: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });


const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
