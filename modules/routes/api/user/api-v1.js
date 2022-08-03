const config = require("../../../config");
const express = require("express");
const { Router } = require("express");

const router = new Router();

//*user
const { user: UserController } = config.path.controllersApi.v1;

//*car
const CreateCarController = require(`${UserController}/car/CreateCarController`);
const DeleteCarController = require(`${UserController}/car/DeleteCarController`);
const GetCarsController = require(`${UserController}/car/GetCarsController`);
const SingleCarController = require(`${UserController}/car/SingleCarController`);
const UpdateCarController = require(`${UserController}/car/UpdateCarController`);
const IndexController = require(`${UserController}/car/IndexController`);


router.post("/create-car", CreateCarController.createCar.bind(CreateCarController));
router.delete("/delete-post/:id", DeleteCarController.destroy.bind(DeleteCarController));
router.get("/get-cars", GetCarsController.getCars.bind(GetCarsController));
router.get("/single-car/:id", SingleCarController.singleCar.bind(SingleCarController));
router.put("/update-car/:id", UpdateCarController.updateCar.bind(UpdateCarController));
router.get("/index-car/:id", IndexController.index.bind(IndexController));


module.exports = router;
