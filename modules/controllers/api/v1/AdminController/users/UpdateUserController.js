const InitializeController = require("./initializeController");

module.exports = new (class UpdateUserController extends InitializeController {
  async updateUser(req, res, next) {
    try {
      const user = await this.model.User.findById({ _id: req.params.id }).exec();
      if (!user) {
        const error = new Error("پستی با این شناسه یافت نشد");
        error.statusCode = 404;
        throw error;
      }
     else{
        const user= req.body;
        // brand.type = type;
        // await brand.save();
        await this.model.User.findByIdAndUpdate(req.params.id, user).exec();
        return res.status(201).json({ message: "  با موفقیت ویرایش شد" });
      }
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
})();
