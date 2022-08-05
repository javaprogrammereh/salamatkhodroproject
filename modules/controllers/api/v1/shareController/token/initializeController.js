const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const token = require(`${config.path.model}/token`);
const { index } = require(`${config.path.helper}/indexAggregate`);
const { transform } = require(`${config.path.helper}/transform`);
const { response } = require(`${config.path.helper}/response`);
const itemTransform = [
  "._id",
  ".userId",
  ".token",
  ".liveTime",
  ".deviceName",
  ".lastIp",
];
module.exports = class initializeController extends controller {
  constructor() {
    super();
    (this.model = { token }),
      (this.helper = { index, response, transform, itemTransform });
  }
};
