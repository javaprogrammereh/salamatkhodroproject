const config = require("../../../config");
const express = require("express");
const router = express.Router();
//*
const apiSuperAdmin = require(`${config.path.middleware}/superAdmin/apiSuperAdmin`);
const apiSuperAdminRegister = require(`${config.path.middleware}/superAdmin/apiSuperAdminRegister`);
const { superAdmin: superAdminController } = config.path.controllersApi.v1;
//*
//car
const carStoreController = require(`${superAdminController}/car/storeController`);
const carUpdateController = require(`${superAdminController}/car/updateController`);
const cardeleteController = require(`${superAdminController}/car/deleteController`);
// auth
const authRegisterController = require(`${superAdminController}/auth/registerController`);
const authLoginController = require(`${superAdminController}/auth/loginController`);
// profile
const profileSingleController = require(`${superAdminController}/profile/singleController`);
//token
const tokenIndexController = require(`${superAdminController}/token/indexController`);
const tokenLogoutController = require(`${superAdminController}/token/logoutController`);
const tokenSingleController = require(`${superAdminController}/token/singleController`);

//*
// profile
const profileRouter = express.Router();
profileRouter.get("/profile-single", profileSingleController.single.bind(profileSingleController));
router.use("/profile", apiSuperAdmin, profileRouter);
// token
const tokenRouter = express.Router();
tokenRouter.get("/index", tokenIndexController.index.bind(tokenIndexController));
tokenRouter.get("/single/:id", tokenSingleController.single.bind(tokenSingleController));
tokenRouter.delete("/logout", tokenLogoutController.logout.bind(tokenLogoutController));
router.use("/session", apiSuperAdmin, tokenRouter);
//auth
const authRouter = express.Router();
authRouter.post("/register", apiSuperAdminRegister, authRegisterController.register.bind(authRegisterController));
authRouter.post("/login", authLoginController.login.bind(authLoginController));
router.use("/auth", authRouter);
//car
const carRouter = express.Router();
carRouter.post("/create", carStoreController.store.bind(carStoreController));
carRouter.put("/:id", carUpdateController.update.bind(carUpdateController));
carRouter.post("/destroy", cardeleteController.destroy.bind(cardeleteController));
router.use("/car", apiSuperAdmin, carRouter);



module.exports = router;
