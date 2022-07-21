const InitializeController = require("./initializeController");
module.exports = new (class singleController extends InitializeController {
  async getCars(req, res) {
    try {
      req.checkParams("id", "ای دی وارد شده صحیح نیست").isMongoId();
      if (this.showValidationErrors(req, res)) return "";
      const car = await this.model.Car.find().exec();
      if (!car) return this.abort(res, 404, logcode, null, "id");
      const Transform = await this.helper.transform(car, this.helper.itemTransform);
      return this.helper.response(res, null, logcode, 200, Transform);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500, logcode);
    }
  }
})();
