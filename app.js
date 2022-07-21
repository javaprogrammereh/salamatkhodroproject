const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const rateLimit = require("express-rate-limit");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
require("dotenv").config();
const port = process.env.APP_PORT;
const mongodbUrl = process.env.MONGODB_URL;
const dev = process.env.DEV;
const releasesV = process.env.RELEASES_V;


// Connect to DB
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});



app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));


app.use(expressValidator());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
app.use(limiter);

//routers
const publicApiV1Router = require("./modules/routes/api/public/api-v1");
const superAdminApiV1Router = require("./modules/routes/api/superAdmin/api-v1");
app.use("/api/v1", publicApiV1Router);
app.use("/api/v1/superAdmin", superAdminApiV1Router);

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    message: {
      message: "!خطای سرور",
      field: null,
      logcode,
    },
    status: 500,
    success: false,
    v: releasesV,
  });
  next();
});
