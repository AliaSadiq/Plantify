const mongoose = require("mongoose");

// const WateringHistorySchema = new mongoose.Schema(
//   {
//     date: {
//         type: Date,
//         required: false,
//     },
//     watered: {
//         type: Boolean,
//         required: false,
//         default: false,
//     },
//     dayOfWeek: {
//         type: String, // "Monday", "Tuesday", etc.
//         required: false,
//     }
//   },
//   {
//     timestamps: true,
//   }
// );

const MyPlantSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: [true, "Please enter plant name"],
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
        default: "my personal plant",
    },
    // waterHistory: [WateringHistorySchema],  // Using the new WateringHistorySchema
    plantationDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const MyPlant = mongoose.model("MyPlant", MyPlantSchema);

module.exports = MyPlant;
