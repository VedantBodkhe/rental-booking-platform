const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: " https://unsplash.com/photos/brown-wooden-table-and-chairs-on-brown-wooden-deck-near-body-of-water-during-daytime-TAgGZWz6Qg8",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/gold-chandelier-on-white-ceiling-ym_EI-DTS1g"
          : v
    },
  },
    price: {
    type: Number,
    default: 50000,
  },
  location: {
    type: String,
    default: "Maharashtra",
  },
  country: {
    type: String,
    default: "INDIA",
  },
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

