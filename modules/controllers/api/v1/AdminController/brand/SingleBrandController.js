const InitializeController = require("./initializeController");
module.exports = new (class SingleBrandController extends InitializeController {
  async singleBrand(req, res, next) {
    try {
      req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
      if (this.showValidationErrors(req, res)) return "";
      const brand = await this.model.Brand.findById(req.params.id).exec();
      if (!brand) return this.abort(res, 404, null, "id");
      const Transform = await this.helper.transform(
        brand,
        this.helper.itemTransform
      );
      return this.helper.response(res, null, 200, Transform,null,null);
      // return res.status(201).json({ Transform });
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
