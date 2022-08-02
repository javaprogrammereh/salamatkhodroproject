const InitializeController = require("./initializeController");
module.exports = new (class DeleteBrandController extends InitializeController {
  async destroyBrand(req, res) {
    req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const brand = await this.model.Brand.findById(req.params.id).exec();
      if (!brand) return this.abort(res, 404, null, null, "id");
      await this.model.Brand.findByIdAndRemove(req.params.id).exec();
      return this.ok(res, "با موفقیت حذف شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
