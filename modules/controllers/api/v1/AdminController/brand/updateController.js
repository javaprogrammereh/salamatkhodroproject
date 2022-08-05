const initializeController = require("./initializeController");

module.exports = new (class updateController extends initializeController {
  async update(req, res) {
    req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const { type } = req.body;
      const brand = await this.model.brand.findById(req.params.id).exec();
      if (!brand) return this.abort(res, 404, null, null, "id");
      brand.type = type;
      await this.model.brand.findByIdAndUpdate(req.params.id, brand).exec();
      return this.ok(res, "با موفقیت اپدیت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
