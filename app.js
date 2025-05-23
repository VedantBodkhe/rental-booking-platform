// Import required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const Listing = require("./model/listing");

// Middleware to parse incoming form data (application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON payloads (application/json)
app.use(express.json());

// Set the view engine to EJS for rendering dynamic pages
app.set("view engine", "ejs");

// Set the directory for EJS views
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, JS, images) from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Middleware to support HTTP method overrides (for PUT, DELETE via POST forms)
app.use(methodOverride('_method'));

// Define the port on which the server will run
let port = 2210;

// MongoDB connection string
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Connect to MongoDB using Mongoose
async function main() {
  await mongoose.connect(MONGO_URL);
}

// Call the function to connect to MongoDB and log result
main().then((res) => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.log("MongoDB connection error:", err);
});

// Root route – simple success response
app.get("/", async (req, res) => {
  await res.send("success");
});

// Index route – fetch and render all listings
app.get("/listings", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listing/index.ejs", { allListings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).send("Internal Server Error");
  }
});

// New route – render form to create a new listing
app.get("/listings/new", (req, res) => {
  res.render("listing/new.ejs");
});

// Create route – save new listing to the database
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  console.log("New listing saved:", newListing);
  res.redirect("/listings");
});

// Show route – display details of a specific listing by ID
app.get("/listing/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listing/show.ejs", { listing });
  console.log("Fetched listing:", listing);
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
