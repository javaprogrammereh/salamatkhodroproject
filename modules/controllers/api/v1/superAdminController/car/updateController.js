const InitializeController = require("./initializeController");

module.exports = new (class updateController extends InitializeController {
  async update(req, res) {
    req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
    if (this.showValidationErrors(req, res)) return;
    /// showValidationErrors
    let values = {};
    if (req.body.faName) {
      values = { ...values, title: req.body.faName };
    }
    if (req.body.tag) {
      let brands = null;
      try {
        brands = JSON.parse(req.body.brands);
        values = { ...values, brands: brands };
      } catch (err) {
        return this.abort(res, 422, logcode, null, null, "tag");
      }
    }
    try {
      const car = await this.model.Car.findById(req.params.id).exec();
      if (!car) return this.abort(res, 404, logcode, null, null, "id");
      await this.model.Car.findByIdAndUpdate(req.params.id, values).exec();
      return this.ok(res, logcode, "با موفقیت اپدیت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500, logcode);
    }
  }
})();
