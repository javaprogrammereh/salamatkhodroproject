const InitializeController = require("./initializeController");
module.exports = new (class GetUsersController extends InitializeController {
  async getUsers(req, res,next) {
    try {
      const users = await this.model.User.find({});
      res.status(200).json({users });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
})();
