const config = require("../../../../../config");
const controller = require(`${config.path.controller}/controller`);

const Car = require(`${config.path.model}/Car`);

module.exports = class initializeController extends controller {
  constructor() {
    super();
    this.model = { Car };
  }
};
