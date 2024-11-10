const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Please enter your fullname"],
      unique: true,
    },
    avatar: {
      type: String,
      required: false,
      default: "avatar-1.png",
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    tokens: [ 
      { token: 
        { 
        type: String, 
        required: true, 
        }, 
      }, 
    ],
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;