const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongoSanitize = require("express-mongo-sanitize");
var expressValidator = require("express-validator");
const dotEnv = require("dotenv");
const connectDB = require("./modules/config/db");
dotEnv.config({ path: "./modules/config/config.env" });
const releasesV = process.env.RELEASES_V;

connectDB();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(expressValidator());
app.use(mongoSanitize());

//*routers
//!   /api/v1/car/create
//!   /api/v1/car/delete/:id
//!   /api/v1/car/getAll
//!   /api/v1/car/single/:id
//!   /api/v1/car/update/:id
//!   /api/v1/car/index/:id
app.use("/api/v1", require("./modules/routes/api/user/api-v1"));

//!   /api/v1/superAdmin/brand/create
//!   /api/v1/superAdmin/brand/index
//!   /api/v1/superAdmin/brand/destroy/:id
//!   /api/v1/superAdmin/brand/update/:id
//!  /api/v1/superAdmin/brand/single/:id
//!  /api/v1/superAdmin/auth/register
//!  /api/v1/superAdmin/auth/login
//!  /api/v1/superAdmin/user/index
//!  /api/v1/superAdmin/user/update/:id
app.use("/api/v1/superAdmin", require("./modules/routes/api/admin/api-v1"));

//!  /api/v1/token/index
//!  /api/v1/token/destroy/:id
//!  /api/v1/
app.use("/api/v1", require("./modules/routes/api/share/api-v1"));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at Port ${PORT}`);
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
