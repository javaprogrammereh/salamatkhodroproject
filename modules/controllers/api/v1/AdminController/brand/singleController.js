const initializeController = require("./initializeController");
module.exports = new (class singleController extends initializeController {
  async single(req, res) {
    try {
      req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
      if (this.showValidationErrors(req, res)) return "";
      const brand = await this.model.brand.findById(req.params.id).exec();
      if (!brand) return this.abort(res, 404, null, "id");
      const Transform = await this.helper.transform(
        brand,
        this.helper.itemTransform
      );
      return this.helper.response(res, null, 200, Transform);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
