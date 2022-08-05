const config = require("../../../config");
const express = require("express");
const { Router } = require("express");

const router = new Router();

//*middleware
const apiSuperAdmin = require(`${config.path.middleware}/share/apiSuperAdmin`);
const apiWho = require(`${config.path.middleware}/who`);

const { share: tokenController } = config.path.controllersApi.v1;

//*token
const indexController = require(`${tokenController}/token/indexController`);
const destroyController = require(`${tokenController}/token/destroyController`);

//*token
const brandRouter = express.Router();
brandRouter.get("/index", indexController.getAll.bind(indexController));
brandRouter.delete(
  "/destroy/:id",
  destroyController.destroy.bind(destroyController)
);
router.use("/token", apiSuperAdmin, brandRouter);

//*who
const whoRouter = express.Router();
whoRouter.get("/");
router.use(apiWho, whoRouter);

module.exports = router;
