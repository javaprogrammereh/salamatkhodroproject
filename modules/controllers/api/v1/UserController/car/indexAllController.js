const initializeController = require("./initializeController");

module.exports = new (class indexAllController extends initializeController {
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
            "car.__v": 0,
            "car.updatedAt": 0,
            "car.createdAt": 0,
          },
        },
      ];
      const result = await this.helper.index(
        req,
        "car",
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
