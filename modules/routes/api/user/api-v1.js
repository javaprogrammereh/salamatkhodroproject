const config = require("../../../config");
const express = require("express");
const { Router } = require("express");

const router = new Router();

//*middleware
const apiSuperAdmin = require(`${config.path.middleware}/superAdmin/apiSuperAdmin`);
const apiSuperAdminRegister = require(`${config.path.middleware}/superAdmin/apiSuperAdminRegister`);
const apiWho = require(`${config.path.middleware}/who`);

//*user
const { user: userController } = config.path.controllersApi.v1;

//*car
const createController = require(`${userController}/car/createController`);
const destroyController = require(`${userController}/car/destroyController`);
const indexAllController = require(`${userController}/car/indexAllController`);
const singleController = require(`${userController}/car/singleController`);
const updateController = require(`${userController}/car/updateController`);
const indexController = require(`${userController}/car/indexController`);

const carRouter = express.Router();
carRouter.post("/create", createController.create.bind(createController));
carRouter.delete("/delete/:id", destroyController.destroy.bind(destroyController));
carRouter.get("/getAll", indexAllController.getAll.bind(indexAllController));
carRouter.get("/single/:id", singleController.single.bind(singleController));
carRouter.put("/update/:id", updateController.update.bind(updateController));
carRouter.get("/index/:id", indexController.index.bind(indexController));
router.use("/car", carRouter);

module.exports = router;
