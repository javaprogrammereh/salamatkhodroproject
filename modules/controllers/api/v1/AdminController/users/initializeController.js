const config = require("../../../../../config");
const controller = require(`${config.path.controller}/Controller`);

const User = require(`${config.path.model}/User`);
const { response } = require(`${config.path.helper}/Response`);
const { transform } = require(`${config.path.helper}/Transform`);
const itemTransform = ["._id", ".name", ".mobile",".username"];

module.exports = class InitializeController extends controller {
  constructor() {
    super();
    (this.model = { User }),
      (this.helper = { response, transform, itemTransform });
  }
};
