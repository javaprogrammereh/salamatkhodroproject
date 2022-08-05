const initializeController = require("./initializeController");
module.exports = new (class destroyController extends initializeController {
  async destroy(req, res) {
    req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const brand = await this.model.brand.findById(req.params.id).exec();
      if (!brand) return this.abort(res, 404, null, null, "id");
      await this.model.brand.findByIdAndRemove(req.params.id).exec();
      return this.ok(res, "با موفقیت حذف شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
