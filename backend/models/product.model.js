// models/productModel.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product Name is required"],
      maxLength: 100,
    },
    type: {
      type: String,
      required: [true, "Product Type is required"],
    //   enum: ["Plants", "Soils", "Tools"],
    },
    category: {
      type: String,
      required: [true, "Product Category is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [10, "Price cannot be negative"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [10, "Quantity cannot be negative"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    specifications: {
      type: String,
      required: [true, "Specifications are required"],
    },
   
    size: {
      type: String,
      required: [true, "Size is required"],
    //   enum: ["small", "medium", "large"],
    },
    sales:{
        type: Number,
        default: 0,
    },
    images:{
        type: [String], required: [true, "image is required"],
    }
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
