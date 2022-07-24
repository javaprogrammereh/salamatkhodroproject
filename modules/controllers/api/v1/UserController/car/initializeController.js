const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const Car = require(`${config.path.model}/Car`);

const { transform } = require(`${config.path.helper}/transform`);
const { response } = require(`${config.path.helper}/response`);
const itemTransform = ["._id", ".faName", ".enName",".slug",".logo",
".description"];
module.exports = class initializeController extends controller {
  constructor() {
    super();
    (this.model = { Car }, (this.helper = { response, transform, itemTransform }));
  }
};