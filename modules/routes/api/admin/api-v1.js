const config = require("../../../config");
const express = require("express");
const { Router } = require("express");

const router = new Router();

//*middleware
const apiSuperAdmin = require(`${config.path.middleware}/superAdmin/apiSuperAdmin`);
const apiSuperAdminRegister = require(`${config.path.middleware}/superAdmin/apiSuperAdminRegister`);
const apiWho = require(`${config.path.middleware}/who`);

//*admin
const { admin: AdminController } = config.path.controllersApi.v1;
const CreateBrandController = require(`${AdminController}/brand/CreateBrandController`);
const GetBrandsController = require(`${AdminController}/brand/GetBrandsController`);
const DeleteBrandController = require(`${AdminController}/brand/DeleteBrandController`);
const UpdateBrandController = require(`${AdminController}/brand/UpdateBrandController`);
const SingleBrandController = require(`${AdminController}/brand/SingleBrandController`);

//*users
const GetUsersController = require(`${AdminController}/users/GetUsersController`);
const UpdateUserController = require(`${AdminController}/users/UpdateUserController`);


// *auth
const RegisterController = require(`${AdminController}/auth/RegisterController`);
const LoginController = require(`${AdminController}/auth/LoginController`);

//*brand
const brandRouter = express.Router();
brandRouter.post("/create-brand", CreateBrandController.createBrand.bind(CreateBrandController));
brandRouter.get("/select-brands", GetBrandsController.getBrands.bind(GetBrandsController));
brandRouter.delete("/delete-brand/:id", DeleteBrandController.destroyBrand.bind(DeleteBrandController));
brandRouter.put("/update-brand/:id", UpdateBrandController.updateBrand.bind(UpdateBrandController));
brandRouter.get("/single-brand/:id", SingleBrandController.singleBrand.bind(SingleBrandController));
router.use("/admin",apiWho,brandRouter);

//*auth
const authRouter = express.Router();
authRouter.post("/register",apiSuperAdminRegister,RegisterController.register.bind(RegisterController));
authRouter.post("/login", LoginController.login.bind(LoginController));
router.use("/auth", authRouter);

//*users
const usersRouter = express.Router();
usersRouter.get("/get-users",GetUsersController.getUsers.bind(GetUsersController));
usersRouter.put("/update-users/:id",UpdateUserController.updateUser.bind(UpdateUserController));
router.use("/users", usersRouter);


module.exports = router;



