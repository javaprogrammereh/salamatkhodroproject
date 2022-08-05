const initializeController = require("./initializeController");

module.exports = new (class indexController extends initializeController {
  async getAll(req, res) {
    try {
      const query = {};
      let sort = {};
      sort = { ...sort, _id: -1 };
      const queryData = [{ $match: query }];
      const aggregateData = [
        { $match: query },
        {
          $project: {
            "token.__v": 0,
            "token.updatedAt": 0,
            "token.createdAt": 0,
          },
        },
      ];
      const result = await this.helper.index(
        req,
        "token",
        queryData,
        aggregateData,
        sort
      );
      if (!result) return this.abort(res, 500);
      const Transform = await this.helper.transform(
        result,
        this.helper.itemTransform,
        true
      );
      return this.helper.response(res, null, 200, Transform);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
