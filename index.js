const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const passport = require("passport");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(5000);
