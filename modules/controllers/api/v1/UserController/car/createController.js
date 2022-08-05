const initializeController = require("./initializeController");
module.exports = new (class createController extends initializeController {
  async create(req, res) {
    req.checkBody("faName", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("enName", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("slug", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("logo", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("description", "فیلد نمیتواند خالی بماند").notEmpty();
    req.checkBody("brands", "فیلد نمیتواند خالی بماند").notEmpty();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const values = {
        faName: req.body.faName,
        enName: req.body.enName,
        slug: req.body.slug,
        logo: req.body.logo,
        description: req.body.description,
        brands: req.body.brands,
      };
      await this.model.car.create(values);
      return this.ok(res, "با موفقیت ثبت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
