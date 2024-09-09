const mongoose=require("mongoose");
// const Schema=mongoose.Schema;
// const mongoose = require('mongoose');

const serviceCardSchema = new mongoose.Schema({
  icon: {
    type: [String], // URL to the icon/image
    required: true,
  },
  title: {
    type: String, // Service title
    required: true,
  },
  description: {
    type: String, // Short description of the service
    required: true,
  },
  features: {
    type: [String], // Array of key features
  },
  cta: {
    text: {
      type: String, // Text for the CTA button
      default: "Learn More",
    },
    link: {
      type: String, // URL for the CTA button
      required: true,
    }
  },
  price: {
    type: String, // Price or pricing details (optional)
    default: "Contact for pricing" // Optional default text if price is not provided
  },
  createdAt: {
    type: Date, // Timestamp of card creation
    default: Date.now
  }
});

const Service= mongoose.model('Service', serviceCardSchema);

// const Service=mongoose.model("Service",service)

module.exports=Service;