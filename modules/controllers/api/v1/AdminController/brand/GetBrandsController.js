const InitializeController = require("./initializeController");
module.exports = new (class GetBrandsController extends InitializeController {
  async getBrands(req, res,next) {
    try {
      // const numberOfCars = await this.model.Car.find({
      // }).countDocuments();
      const brand = await this.model.Brand.find({});
      res.status(200).json({brand });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
})();
