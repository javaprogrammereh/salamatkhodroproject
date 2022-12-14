const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const brand = require(`${config.path.model}/brand`);
const { index } = require(`${config.path.helper}/indexAggregate`);
const { transform } = require(`${config.path.helper}/transform`);
const { response } = require(`${config.path.helper}/response`);
const itemTransform = ["._id", ".type"];
module.exports = class initializeController extends controller {
  constructor() {
    super();
    (this.model = { brand }),
      (this.helper = { index,response, transform, itemTransform });
  }
};
