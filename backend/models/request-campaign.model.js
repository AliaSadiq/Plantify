const mongoose = require('mongoose');
const { Schema } = mongoose;

const RequestSchema = new Schema({
  socialGroup: {
    type: Schema.Types.ObjectId,
    ref: 'SocialGroup',
    // required: true,
  },
  name:{
    type: String,
    required: true,
  },
  title:{
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  attachedImage: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Request', RequestSchema);
