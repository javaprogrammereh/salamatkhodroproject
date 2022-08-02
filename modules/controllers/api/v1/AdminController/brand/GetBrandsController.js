const InitializeController = require("./initializeController");
module.exports = new (class GetBrandsController extends InitializeController {
  async getBrands(req, res) {
    try {
      // const numberOfCars = await this.model.Car.find({
      // }).countDocuments();
      const brand = await this.model.Brand.find({});
      if (!brand) return this.abort(res, 404, null);
      const Transform = await this.helper.transform(
        brand,
        this.helper.itemTransform
      );
      return this.helper.response(res, null, 200, brand,null,null);
      // return res.status(201).json({ brand });
      // res.status(200).json({brand });
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
