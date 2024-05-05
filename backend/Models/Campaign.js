const mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    Date: {
      type: Number,
      required: true,
      default: 0,
    },
    location: {
      type: Number,
      required: true,
      default: 0,
    },
    image: {
      type: String,
      required: false,
    },
    DonationTarget:{
      type:Number,
      required: true,
      default:0,
    },
    Team:{
      type:List,
      required: true,
      default:0,
    },
    Volunteers:{
      type:List,
      required: true,
      default:[],
    },       
  },
  {
    timestamps: true,
  }
 );

const Product = mongoose.model("Product", ProductSchema); // Pass ProductSchema object here

module.exports = Product;
