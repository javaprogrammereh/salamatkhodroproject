const InitializeController = require("./initializeController");
module.exports = new (class GetUsersController extends InitializeController {
  async getUsers(req, res) {
    try {
      const users = await this.model.User.find({});
      if (!users) return this.abort(res, 404, null);
      return this.helper.response(res, null, 200, users,null,null);
      // res.status(200).json({ users });
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
