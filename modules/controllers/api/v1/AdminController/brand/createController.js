const initializeController = require("./initializeController");
module.exports = new (class createController extends initializeController {
  async create(req, res) {
    req.checkBody("type", "فیلد نمیتواند خالی باشد").notEmpty();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const { type } = req.body;
      await this.model.brand.create({ type });
      return this.ok(res, "با موفقیت ثبت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
