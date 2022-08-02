const InitializeController = require("./initializeController");
module.exports = new (class CreateCarController extends InitializeController {
  async createCar(req, res) {
    try {
      const values = {
        faName: req.body.faName,
        enName: req.body.enName,
        slug: req.body.slug,
        logo: req.body.logo,
        description: req.body.description,
        brands: req.body.brands,
      };
      await this.model.Car.create(values);
      return this.ok(res, "با موفقیت ثبت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
