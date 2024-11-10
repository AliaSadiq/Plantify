const mongoose = require("mongoose");

const SellerSchema = mongoose.Schema(
  {
    storeName: {
        type: String,
        required: [true, "Please enter your store's name"],
        unique: true,
    },
    storeLogo: {
        type: String,
    },
    storeBanner: {
        type: String,
    },
    storeDescription: {
        type: String,
        required: [true, "Please enter your store's name"],
    },
    businessCertificate: {
        type: String,
        required: true,
    },
    taxID: {
        type: String,
        required: true,
        unique: true,
    },
    businessAddress: {
        type: String,
        // required: [true, "Please enter your store's address"],
    },
    businessContact: {
        type: String,
        required: true
    },
    businessEmail: {
        type: String,
        required: [true, "Please enter your business email"],
        unique: true,
    },
    sellerName: {
        type: String,
        required: [true, "Please enter your name"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
    },
    cnic: {
        type: String,
        required: true,
        unique: true,
    },
    contact: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['on wait', 'accepted', 'rejected'],
        default: 'on wait',
    }
  },
  {
    timestamps: true,
  }
);

const Seller = mongoose.model("Seller", SellerSchema);

module.exports = Seller;
