const InitializeController = require("./initializeController");

module.exports = new (class RegisterController extends InitializeController {
  async register(req, res, next) {
    try {
      const user = await this.model.User.findOne({
        email: req.body.email,
      }).exec();
      if (user) {
        const error = new Error("کاربری با این ایمیل در پایگاه داده موجود است");
        error.statusCode = 422;
        throw error;
      } else {
        const values = {
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          role: req.body.role,
          provider: req.body.provider,
          mobile: req.body.mobile,
          contact: req.body.contact,
          credit: req.body.credit,
          accessToken: req.body.accessToken,
          active: req.body.active,
        };
        await this.model.User.create(values);
        res.status(201).json({
          message: "عضویت موفقیت آمیز بود",
        });
      }
    } catch (err) {
      next(err);
    }
  }
})();
