const InitializeController = require("./initializeController");
module.exports = new (class GetCarsController extends InitializeController {
  async getCars(req, res,next) {
    try {
      // const numberOfCars = await this.model.Car.find({
      // }).countDocuments();
      const cars = await this.model.Car.find({});
      res.status(200).json({cars:cars });
    
    } catch (err) {
      console.log(err);
      next();
    }
  }
})();
