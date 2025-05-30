const mongoose = require("mongoose");
const Listing = require("../model/listing.js");
const data = require("./data.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
};
main().then((res) => {
  console.log("connected to mongodb");
}).catch((err) => {
  console.log(err);

});

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(data);
  console.log("data was initialized");
}
initDB();
