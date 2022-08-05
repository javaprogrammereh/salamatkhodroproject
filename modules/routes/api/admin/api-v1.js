const config = require("../../../config");
const express = require("express");
const { Router } = require("express");

const router = new Router();

//*middleware
const apiSuperAdmin = require(`${config.path.middleware}/superAdmin/apiSuperAdmin`);
const apiSuperAdminRegister = require(`${config.path.middleware}/superAdmin/apiSuperAdminRegister`);
const apiWho = require(`${config.path.middleware}/who`);

const { admin: adminController } = config.path.controllersApi.v1;

//*admin
const createController = require(`${adminController}/brand/createController`);
const indexController = require(`${adminController}/brand/indexController`);
const destroyController = require(`${adminController}/brand/destroyController`);
const updateController = require(`${adminController}/brand/updateController`);
const singleController = require(`${adminController}/brand/singleController`);

//*users
const getUserController = require(`${adminController}/users/indexController`);
const updateUserController = require(`${adminController}/users/updateController`);

// *auth
const registerController = require(`${adminController}/auth/registerController`);
const loginController = require(`${adminController}/auth/loginController`);

//*brand
const brandRouter = express.Router();
brandRouter.post("/create", createController.create.bind(createController));
brandRouter.get("/index", indexController.getAll.bind(indexController));
brandRouter.delete("/destroy/:id", destroyController.destroy.bind(destroyController));
brandRouter.put("/update/:id", updateController.update.bind(updateController));
brandRouter.get("/single/:id", singleController.single.bind(singleController));
router.use("/brand",apiSuperAdmin,brandRouter);

//*auth
const authRouter = express.Router();
authRouter.post("/register",registerController.register.bind(registerController));
authRouter.post("/login", loginController.login.bind(loginController));
router.use("/auth", authRouter);

//*users
const usersRouter = express.Router();
usersRouter.get("/index",getUserController.getAll.bind(getUserController));
usersRouter.put("/update/:id",updateUserController.update.bind(updateUserController));
router.use("/user",apiSuperAdmin, usersRouter);


module.exports = router;



