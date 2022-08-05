const initializeController = require("./initializeController");

module.exports = new (class updateController extends initializeController {
  async update(req, res) {
    req.checkBody("name", "وارد کردن فیلد نام الزامیست").notEmpty();
    req.checkBody("username", "وارد کردن فیلد نام کاربری الزامیست").notEmpty();
    req.checkBody("email", "وارد کردن فیلد ایمیل الزامیست").notEmpty();
    req.checkBody("password", "وارد کردن فیلد پسورد الزامیست").notEmpty();
    req.checkBody("role", "وارد کردن نقش ایمیل الزامیست").notEmpty();
    req.checkBody("mobile", "وارد کردن فیلد موبایل الزامیست").notEmpty();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const user = await this.model.user
        .findById({
          _id: req.params.id,
        })
        .exec();
      if (!user) return this.abort(res, 404, null, null, "id");
      await this.model.user.findByIdAndUpdate(req.params.id, req.body).exec();
      return this.ok(res, "با موفقیت اپدیت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
