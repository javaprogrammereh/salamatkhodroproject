const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const Brand = require(`${config.path.model}/Brand`);

const { transform } = require(`${config.path.helper}/transform`);
const { response } = require(`${config.path.helper}/response`);
const itemTransform = ["._id", ".type"];
module.exports = class initializeController extends controller {
  constructor() {
    super();
    (this.model = { Brand }, (this.helper = { response, transform, itemTransform }));
 
  }
};
///