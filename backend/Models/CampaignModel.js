const mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter campaign name"],
    },
    Date: {
      type: String,
      required: true,
     
    },
    Description:{
      type:String,
      required: true,
    },
    location:{
      type: String,
      required:true,
    },
    city: {
      type: String,
      required: true,
     
    },
    province:{
      type: String,
      required:true,
    },
    country:{
      type: String,
      required:!false,
    },
    image: {
      type: String,
      required: false,
    },
    DonationTarget:{
      type:Number,
      required: false,
      default:0,
    },
    Team:{
      type:Array,
      required: false,
      default:0,
    },
    Volunteers:{
      type:Array,
      required: false,
      default:[],
    },       
  },
  {
    timestamps: true,
  }
 );

const campaign = mongoose.model("Campaign", CampaignSchema); // Pass ProductSchema object here

module.exports = campaign;
