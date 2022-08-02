const InitializeController = require("./initializeController");

module.exports = new (class RegisterController extends InitializeController {
  async register(req, res) {
    req.checkBody("name", "وارد کردن فیلد نام الزامیست").notEmpty();
    req.checkBody("username", "وارد کردن فیلد نام کاربری الزامیست").notEmpty();
    req.checkBody("mobile", "وارد کردن فیلد موبایل الزامیست").notEmpty();
    req.checkBody("password", "وارد کردن فیلد پسورد الزامیست").notEmpty();
    req.checkBody("email", "فرمت ایمیل وارد شده صحیح نیست").isEmail();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const user = await this.model.User.findOne({
        email: req.body.email,
      }).exec();
      if (user)
        return this.abort(res, 422, "ایمل وارد شده تکراریست", null, "email");
      const values = {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "user",
        mobile: req.body.mobile,
      };
      await this.model.User.create(values);
      return this.ok(res, "با موفقیت اضافه شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
