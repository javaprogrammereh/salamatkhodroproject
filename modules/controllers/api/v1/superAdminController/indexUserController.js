const config = require("../../../../config");
const Controller = require(`${config.path.controller}/controller`);

const { response } = require(`${config.path.helper}/response`);
const { transform } = require(`${config.path.helper}/transform`);

const itemTransform = [
  "._id",
  ".username",
  ".name",
  ".email",
  ".mobile",
  ".provider",
  "contact",
  "password",
  "role",
];
module.exports = new (class indexUserController extends Controller {
  async index(req, res) {
    let query = {};
    if (req.query.type) {
      try {
        let type = JSON.parse(req.query.type);
        query = { ...query, type: { $in: type } };
      } catch (err) {
        return this.abort(
          res,
          404,
          "تایپ وارد شده صحیح نیست",
          null,
          "type"
        );
      }
    }
    const result = await index(req, "user", query, [
      { $match: query },
      { $sort: { _id: -1 } },
    ]);
    if (!result) return this.abort(res, 500);
    const Transform = await transform(result, itemTransform, true);
    return response(res, null, 200, Transform);
  }
})();
