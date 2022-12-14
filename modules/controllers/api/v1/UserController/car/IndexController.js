const initializeController = require("./initializeController");
const mongoose = require("mongoose");

module.exports = new (class indexController extends initializeController {
  async index(req, res) {
    req.checkParams("id", "The entered ID is incorrect").isMongoId();
    if (this.showValidationErrors(req, res)) return "";
    try {
      const query = { brands: mongoose.Types.ObjectId(req.params.id) };
      let sort = {};
      sort = { ...sort, _id: -1 };
      const queryData = [{ $match: query }];
      const aggregateData = [
        { $match: query },
        {
          $lookup: {
            from: "brands",
            localField: "brands",
            foreignField: "_id",
            as: "brands",
          },
        },
        {
          $project: {
            "brands._id": 0,
            "brands.__v": 0,
            "brands.updatedAt": 0,
            "brands.createdAt": 0,
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
