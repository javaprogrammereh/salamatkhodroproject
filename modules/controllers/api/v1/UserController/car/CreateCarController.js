const InitializeController = require("./initializeController");
module.exports = new (class CreateCarController extends InitializeController {
  async createCar(req, res, next) {
    try {
      const values = {
        faName: req.body.faName,
        enName: req.body.enName,
        slug: req.body.slug,
        logo: req.body.logo,
        description: req.body.description,
        brands: req.body.brands,
      };
      await this.model.Car.create(values).then(() =>
          res.status(201).json({ message: "پست جدید با موفقیت ساخته شد" })
        );
    } catch (err) {
      console.log(err);
      next();
    }
  }
})();
