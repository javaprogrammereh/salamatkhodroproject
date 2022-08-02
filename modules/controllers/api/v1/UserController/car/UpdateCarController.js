const InitializeController = require("./initializeController");

module.exports = new (class UpdateCarController extends InitializeController {
  async updateCar(req, res) {
    req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const car = await this.model.Car.findById({ _id: req.params.id }).exec();
      if (!car) return this.abort(res, 404, null, null, "id");
      const values = {
        faName: req.body.faName,
        enName: req.body.enName,
        slug: req.body.slug,
        logo: req.body.logo,
        description: req.body.description,
        brands: req.body.brands,
      };
      await this.model.Car.findByIdAndUpdate(req.params.id, values).exec();
      return this.ok(res, "با موفقیت اپدیت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
