const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./model/listing");

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride('_method'));

let port = 2210;

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
async function main() {
  await mongoose.connect(MONGO_URL);
}
main().then((res) => {
  console.log("connected to mongoDB");
}).catch((err) => {
  console.log(err);
});


app.get("/", async (req, res) => {
  await res.send("success");
});


// index route
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });

  } catch (error) {
    console.error("Error fetching listings:", err);
    res.status(500).send("Internal Server Error");

  }

});

app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listing/show.ejs", { listing });
  console.log(listing)
})


app.listen(port, () => {
  console.log(`server is listening on port : ${port}`);
});
