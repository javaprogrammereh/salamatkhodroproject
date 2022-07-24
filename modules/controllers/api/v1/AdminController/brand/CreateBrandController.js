const InitializeController = require("./initializeController");
module.exports = new (class CreateBrandController extends InitializeController {
  async createBrand(req, res, next) {
    try {
      const {type}= req.body;
      await this.model.Brand.create({type}).then(() =>
          res.status(201).json({ message: "برند جدید با موفقیت ساخته شد" })
        );
    } catch (err) {
      console.log(err);
      next();
    }
  }
})();
