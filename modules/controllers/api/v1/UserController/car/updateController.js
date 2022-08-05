const initializeController = require("./initializeController");

module.exports = new (class updateController extends initializeController {
  async update(req, res) {
    req.checkParams("id", "The entered ID is incorrect").isMongoId();
    req.checkBody("faName", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("enName", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("slug", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("logo", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("description", "فیلد نمیتواند خالی بماند").notEmpty();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const car = await this.model.car.findById({ _id: req.params.id }).exec();
      if (!car) return this.abort(res, 404, null, null, "id");
      const values = {
        faName: req.body.faName,
        enName: req.body.enName,
        slug: req.body.slug,
        logo: req.body.logo,
        description: req.body.description,
        brands: req.body.brands,
      };
      await this.model.car.findByIdAndUpdate(req.params.id, values).exec();
      return this.ok(res, "با موفقیت اپدیت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
