const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const car = require(`${config.path.model}/car`);
const { index } = require(`${config.path.helper}/indexAggregate`);
const { transform } = require(`${config.path.helper}/transform`);
const { response } = require(`${config.path.helper}/response`);
const itemTransform = [
  "._id",
  ".faName",
  ".enName",
  ".slug",
  ".logo",
  ".description",
  ".brands",
];
module.exports = class initializeController extends controller {
  constructor() {
    super();
    (this.model = { car }),
      (this.helper = { index, response, transform, itemTransform });
  }
};
