const InitializeController = require("./initializeController");
module.exports = new (class singleController extends InitializeController {
  async getBrand(req, res) {
    try {
      if (this.showValidationErrors(req, res)) return "";
      const brand = await this.model.brand.find();
      if (!brand) return this.abort(res, 404, null, "id");
      return this.helper.response(res, null, 200, brand);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();

