// const mongoose = require("mongoose");

// const WateringHistorySchema = new mongoose.Schema(
//   {
//     date: {
//       type: Date,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const MyPlantSchema = new mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//     name: {
//       type: String,
//       required: [true, "Please enter plant name"],
//     },
//     type: {
//       type: String,
//       required: true,
//     },
//     description: {
//       type: String,
//       required: false,
//       default: "my personal plant",
//     },
//     waterHistory: [WateringHistorySchema],  // Using the new WateringHistorySchema
//     plantationDate: {
//       type: Date,
//       required: true,
//       default: Date.now,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const MyPlant = mongoose.model("MyPlant", MyPlantSchema);

// module.exports = MyPlant;
