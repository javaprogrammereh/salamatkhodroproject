const InitializeController = require("./initializeController");
module.exports = new (class SingleCarController extends InitializeController {
  async singleCar(req, res, next) {
    try {
      const car = await this.model.Car.findById({ _id: req.params.id });
      return res.status(201).json({ car });
    } catch (err) {
      console.log(err);
      next();
    }
  }
})();
