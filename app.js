const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
// == ** ROUTER ** == //
const shopRoute = require("./routes/shop");
const homeRoute = require("./routes/home");
const adminRoute = require("./routes/admin");
// ==** MODELS ** ==//
const User = require("./models/User");

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(async (req, res, next) => {
  try {
    const user = await User.findById("65885bff93c5cc3919ee1eba");
    req.user = user;
    next();
  } catch (err) {
    console.log(err);
  }
});
app.use(homeRoute);
app.use(shopRoute);
app.use(adminRoute);
const startServer = async () => {
  try {
    const url = "mongodb://localhost:27017/MongooseCRUDSimOrders";
    await mongoose.connect(url);
    console.log("connect database");
    const user = await User.findOne();
    if (!user) {
      const user = await new User({
        name: "mahdi",
        email: "mahdi@gmail.com",
        cart: {
          SPN: [], // Select Product Number
        },
      });
      user.save();
    }
    app.listen(3000, () => {
      console.log("run server on port 3000");
    });
  } catch (err) {
    console.log("cannot connect database =>", err);
  }
};
startServer();
