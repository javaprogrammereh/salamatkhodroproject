const InitializeController = require("./initializeController");
const bcrypt = require("bcryptjs");

module.exports = new (class LoginController extends InitializeController {
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await this.model.User.findOne({ email });
      if (!user) {
        const error = new Error("کاربری با این ایمیل یافت نشد");
        error.statusCode = 404;
        throw error;
      }
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const Transform = await this.helper.transform(
          user,
          this.helper.itemTransform,
          false,
          "user",
          req.connection.remoteAddress,
          req.get("User-Agent")
        );
        return res.status(200).json({ status: 200, user,Transform });
      }
      else {
        const error = new Error("آدرس ایمیل یا کلمه عبور اشتباه است");
        error.statusCode = 422;
        throw error;
      }
    } catch (err) {
      next(err);
    }
  }
})();
