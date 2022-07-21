const InitializeController = require("./initializeController");

module.exports = new (class storeController extends InitializeController {
  async store(req, res) {
    req.checkBody("faName", "فیلد تایتل نمیتواند خالی باشد").notEmpty();
    req.checkBody("brands", "فیلد تگ نمیتواند خالی بماند").notEmpty();
    if (this.showValidationErrors(req, res)) return;
    let values = {
      faName:req.body.faName,
      enName:req.body.faName,
      slug:req.body.faName,
      logo:req.body.faName,
      description:req.body.faName,
      brands:req.body.brands,
      model:req.body.model,
      style:req.body.style,
      type:req.body.type,
    };
    try {
      await this.model.Car.create(values);
      return this.ok(res, logcode, "با موفقیت ثبت شد");
    } catch (err) {
      console.log(err);
      return this.abort(res, 500, logcode);
    }
  }
})();

