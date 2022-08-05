const initializeController = require("./initializeController");
module.exports = new (class singleController extends initializeController {
  async single(req, res) {
    try {
      req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
      if (this.showValidationErrors(req, res)) return "";
      const car = await this.model.car.findById({ _id: req.params.id });
      if (!car) return this.abort(res, 404, null, "id");
      const Transform = await this.helper.transform(
        car,
        this.helper.itemTransform
      );
      return this.helper.response(res, null, 200, Transform);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
