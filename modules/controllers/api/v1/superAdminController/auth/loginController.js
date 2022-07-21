const InitializeController = require("./initializeController");
const bcrypt = require("bcrypt");

module.exports = new (class loginController extends InitializeController {
  async login(req, res) {
    req.checkBody("email", "وارد کردن فیلد ایمیل الزامیست").notEmpty();
    req.checkBody("password", "وارد کردن فیلد پسورد الزامیست").notEmpty();
    if (this.showValidationErrors(req, res)) return "";
    //
    try {
      const BasicAdmin = await this.model.User.findOne({ email: req.body.email, type: "basic" }).exec();
      if (!BasicAdmin) return this.abort(res, 401, logcode);
      const match = await bcrypt.compare(req.body.password, BasicAdmin.password);
      if (!match) return this.abort(res, 401, logcode);
      const Transform = await this.helper.transform(
        BasicAdmin,
        this.helper.itemTransform,
        false,
        "basic",
        req.connection.remoteAddress,
        req.get("User-Agent")
      );
      return this.helper.response(res, null, logcode, 200, Transform);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500, logcode);
    }
  }
})();
