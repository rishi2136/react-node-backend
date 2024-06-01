const express = require("express");
const app = express();
require('dotenv').config()
const port = 3000;
const dummyData = require("./models/dummyData");
const cors = require("cors")
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

const Slider = require("./models/slider")


const mongoose = require('mongoose');

main()
  .then(() => console.log("Connected to Database"))
  .catch(err => console.log(err));



async function main() {
  await mongoose.connect(process.env.MONGO_ATLAS_DB);
}


async function insertSlider() {
  await Slider.deleteMany({});
  let sliderData = await Slider.insertMany([...dummyData]);
  console.log(sliderData);
};
//to initianlise DB
// app.get("/init", (req, res) => {
//   insertSlider();
//   res.send("DB is initailize");
// })


app.get("/", (req, res) => {
  res.send("I am Home page")
})
app.get("/cabryder", () => {
  res.send("I am Landing page");
})

app.get("/cabryder/service", async (req, res) => {
  let response = await Slider.find({});
  res.json(response);
})



app.listen(port, () => {
  console.log(`Connected with port number ${port}`)
})

