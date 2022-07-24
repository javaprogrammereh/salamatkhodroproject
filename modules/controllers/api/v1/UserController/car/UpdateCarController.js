const InitializeController = require("./initializeController");

module.exports = new (class UpdateCarController extends InitializeController {
  async updateCar(req, res, next) {
    try {
      const car = await this.model.Car.findById({ _id: req.params.id }).exec();
      if (!car) {
        const error = new Error("پستی با این شناسه یافت نشد");
        error.statusCode = 404;
        throw error;
      }
     else{
        const values = {
          faName: req.body.faName,
          enName: req.body.enName,
          slug: req.body.slug,
          logo: req.body.logo,
          description: req.body.description,
          brands: req.body.brands
        };
        await this.model.Car.findByIdAndUpdate(req.params.id, values).exec();
        return res.status(201).json({ message: "پست  با موفقیت ویرایش شد" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
})();
