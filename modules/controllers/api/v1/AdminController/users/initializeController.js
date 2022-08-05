const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const user = require(`${config.path.model}/user`);
const { index } = require(`${config.path.helper}/indexAggregate`);
const { response } = require(`${config.path.helper}/response`);
const { transform } = require(`${config.path.helper}/transform`);
const itemTransform = [
  "._id",
  ".name",
  ".username",
  ".email",
  ".password",
  ".role",
  ".mobile",
];

module.exports = class initializeController extends controller {
  constructor() {
    super();
    (this.model = { user }),
      (this.helper = { index,response, transform, itemTransform });
  }
};
