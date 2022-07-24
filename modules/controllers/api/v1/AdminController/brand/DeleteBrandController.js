const InitializeController = require("./initializeController");
module.exports = new (class DeleteBrandController extends InitializeController {
  async destroyBrand(req, res, next) {
    try {
      await this.model.Brand.findByIdAndRemove(req.params.id).then(() =>
        res.status(200).json({ message: "پست جدید با موفقیت حذف شد" })
      );
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
})();
