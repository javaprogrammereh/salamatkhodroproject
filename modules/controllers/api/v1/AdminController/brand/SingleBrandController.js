const InitializeController = require("./initializeController");
module.exports = new (class SingleBrandController extends InitializeController {
  async singleBrand(req, res, next) {
    try {
      const brand = await this.model.Brand.findById({ _id: req.params.id });
      return res.status(201).json({ brand });
    } catch (err) {
      console.log(err);
      next();
    }
  }
})();
