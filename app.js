const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");

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

app.get("/", (req, res) => {
  res.send("success");
})



app.listen(port, () => {
  console.log(`server is listening on port : ${port}`);
});
