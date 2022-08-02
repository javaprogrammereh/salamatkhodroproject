const config = require("../../../../../config");
const controller = require(`${config.path.controller}/Controller`);

const Car = require(`${config.path.model}/Car`);

const { transform } = require(`${config.path.helper}/Transform`);
const { response } = require(`${config.path.helper}/Response`);
const itemTransform = ["._id", ".faName", ".enName",".slug",".logo",
".description"];
module.exports = class InitializeController extends controller {
  constructor() {
    super();
    (this.model = { Car }, (this.helper = { response, transform, itemTransform }));
  }
};