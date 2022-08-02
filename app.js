const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var expressValidator = require('express-validator');
const dotEnv = require('dotenv');
const connectDB = require('./modules/config/db');
dotEnv.config({path:"./modules/config/config.env"});
const releasesV = process.env.RELEASES_V;


connectDB();
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: "application/json" }));
app.use(expressValidator());


//*routers
//!   /api/v1/cars/create-car
//!   /api/v1/cars/delete-post/:id
//!   /api/v1/cars/get-cars
//!   /api/v1/cars/single-car/:id
//!   /api/v1/cars/update-car/:id
app.use("/api/v1/cars", require("./modules/routes/api/user/api-v1"));

//!   /api/v1/admin/create-brand
//!   /api/v1/admin/select-brands
//!   /api/v1/admin/delete-brand/:id
//!   /api/v1/admin/update-brand/:id
//!  /api/v1/admin/single-brand/:id
//!  /api/v1/auth/register
//!  /api/v1/auth/login
//!  /api/v1/users/get-users
//!  /api/v1/users/update-users/:id
app.use("/api/v1", require("./modules/routes/api/admin/api-v1"));



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
