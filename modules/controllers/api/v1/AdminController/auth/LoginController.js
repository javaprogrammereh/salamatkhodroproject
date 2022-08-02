const InitializeController = require("./initializeController");
const bcrypt = require("bcryptjs");

module.exports = new (class LoginController extends InitializeController {
  async login(req, res) {
    req.checkBody("email", "وارد کردن فیلد ایمیل الزامیست").notEmpty();
    req.checkBody("password", "وارد کردن فیلد پسورد الزامیست").notEmpty();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const user = await this.model.User.findOne({
        email: req.body.email,
        role: "user",
      }).exec();
      if (!user) return this.abort(res, 401);
      const match = await bcrypt.compare(req.body.password, user.password);
      if (!match) return this.abort(res, 401);
      const Transform = await this.helper.transform(
        user,
        this.helper.itemTransform,
        false,
        "user",
        req.connection.remoteAddress,
        req.get("User-Agent")
      );
      return this.helper.response(res, null, 200, Transform,null,null);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
