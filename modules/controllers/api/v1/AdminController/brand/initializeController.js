const config = require("../../../../../config");
const controller = require(`${config.path.controller}/Controller`);

const Brand = require(`${config.path.model}/Brand`);

const { transform } = require(`${config.path.helper}/Transform`);
const { response } = require(`${config.path.helper}/Response`);
const itemTransform = ["._id", ".type"];
module.exports = class InitializeController extends controller {
  constructor() {
    super();
    (this.model = { Brand }),
      (this.helper = { response, transform, itemTransform });
  }
};
