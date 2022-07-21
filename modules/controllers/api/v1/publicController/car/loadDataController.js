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
  async getModel(req, res) {
    try {
      if (this.showValidationErrors(req, res)) return "";
      const model = await this.model.model.find();
      if (!model) return this.abort(res, 404, null, "id");
      return this.helper.response(res, null, 200,model);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
  async getType(req, res) {
    try {
      if (this.showValidationErrors(req, res)) return "";
      const type = await this.model.type.find();
      if (!type) return this.abort(res, 404, null, "id");
      return this.helper.response(res, null, 200,type);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
  async getStyle(req, res) {
    try {
      if (this.showValidationErrors(req, res)) return "";
      const style = await this.model.style.find();
      if (!style) return this.abort(res, 404, null, "id");
      return this.helper.response(res, null, 200,style);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();

