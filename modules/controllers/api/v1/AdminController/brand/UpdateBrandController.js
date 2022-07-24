const InitializeController = require("./initializeController");

module.exports = new (class UpdateBrandController extends InitializeController {
  async updateBrand(req, res, next) {
    try {
      const brand = await this.model.Brand.findById({ _id: req.params.id }).exec();
      if (!brand) {
        const error = new Error("پستی با این شناسه یافت نشد");
        error.statusCode = 404;
        throw error;
      }
     else{
        const {type}= req.body;
        brand.type = type;
        // await brand.save();
        await this.model.Brand.findByIdAndUpdate(req.params.id, brand).exec();
        return res.status(201).json({ message: "برند  با موفقیت ویرایش شد" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
})();
