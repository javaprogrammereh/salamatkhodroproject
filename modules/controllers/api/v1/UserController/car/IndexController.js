const InitializeController = require("./InitializeController");
const mongoose = require("mongoose");
module.exports = new (class IndexController extends InitializeController {
  async index(req, res) {
    try {
      let query = { userId: req.user._id };
      let sort = {};
      let lookUp = [
        {
          $lookup: {
            from: "cars",
            localField: "carId",
            foreignField: "_id",
            as: "carId",
          },
        },
        {
          $addFields: {
            user: { $arrayElemAt: ["$carId", 0] },
          },
        },
        {
          $addFields: {
            user: { $ifNull: ["$car", null] },
          },
        },
      ];
      if (req.query.userId) {
        req.checkQuery("carId", "صحیح نیست").isMongoId();
        if (this.showValidationErrors(req, res)) return "";
        query = { ...query, userId: mongoose.Types.ObjectId(req.query.userId) };
      }
      let project = {
        userId: 0,
        "car.updatedAt": 0,
        "car.createdAt": 0,
        "car.__v": 0,
        "car.faName": 0,
        "car.enName": 0,
      };
      sort = { ...sort, _id: -1 };
      const queryData = [{ $match: query }];
      const aggregateData = [{ $match: query }, ...lookUp, { $project: project }];
      const result = await this.helper.index(req, "car", queryData, aggregateData, sort);
      if (!result) return this.abort(res, 500, logcode);
      const Transform = await this.helper.transform(result, this.helper.itemTransform, true);
      return this.helper.response(res, null, 200, Transform,null,null);
    } catch (err) {
      console.log(err);
      return this.abort(res, 500);
    }
  }
})();
