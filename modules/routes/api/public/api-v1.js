const config = require("../../../config");
const express = require("express");
const router = express.Router();


const { public: publicController } = config.path.controllersApi.v1;

//*car
const getCarsController = require(`${publicController}/car/getCarsController`);
const carSingleController = require(`${publicController}/car/singleController`);
const loadDataController = require(`${publicController}/car/loadDataController`);


const carRouter = express.Router();
carRouter.get("/all", getCarsController.getCars.bind(getCarsController));
carRouter.get("/:id", carSingleController.single.bind(carSingleController));
carRouter.get("/brand", loadDataController.getBrand.bind(loadDataController));
carRouter.get("/model", loadDataController.getModel.bind(loadDataController));
carRouter.get("/style", loadDataController.getType.bind(loadDataController));
carRouter.get("/type", loadDataController.getStyle.bind(loadDataController));

router.use("/cars", carRouter);

module.exports = router;
