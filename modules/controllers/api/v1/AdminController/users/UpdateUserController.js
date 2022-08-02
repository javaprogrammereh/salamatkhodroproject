const InitializeController = require("./initializeController");

module.exports = new (class UpdateUserController extends InitializeController {
  async updateUser(req, res) {
    try {
      const user = await this.model.User.findById({
        _id: req.params.id,
      }).exec();
      if (!user) return this.abort(res, 404, null, null, "id");
      await this.model.User.findByIdAndUpdate(req.params.id, req.body).exec();
      return this.ok(res, "با موفقیت اپدیت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
