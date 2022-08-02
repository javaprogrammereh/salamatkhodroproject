const InitializeController = require("./initializeController");
module.exports = new (class CreateBrandController extends InitializeController {
  async createBrand(req, res) {
    req.checkBody("type", "فیلد تایتل نمیتواند خالی باشد").notEmpty();
    try {
      const { type } = req.body;
      await this.model.Brand.create({ type });
      return this.ok(res, "با موفقیت ثبت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
