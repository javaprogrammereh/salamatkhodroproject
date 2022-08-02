const InitializeController = require("./initializeController");
module.exports = new (class GetCarsController extends InitializeController {
  async getCars(req, res) {
    try {
      // const numberOfCars = await this.model.Car.find({
      // }).countDocuments();
      const cars = await this.model.Car.find({});
      if (!cars) return this.abort(res, 404, null);
      const Transform = await this.helper.transform(
        cars,
        this.helper.itemTransform
      );
      // return this.helper.response(res,null, Transform);
      return res.status(201).json({ cars });
      // res.status(200).json({cars });
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
