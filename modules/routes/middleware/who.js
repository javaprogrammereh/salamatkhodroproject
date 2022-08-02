const config = require("../../config");
const User = require(`${config.path.model}/User`);
const Token = require(`${config.path.model}/Token`);
const { unauthorized, response } = require(`${config.path.helper}/response`);
const { transform } = require(`${config.path.helper}/transform`);
const itemTransform = [
  "._id",
  ".name",
  ".username",
  ".mobile",
  ".email",
  ".password",
  ".role",
];

module.exports = async (req, res, next) => {
  try {
    const token = await Token.findOne({
      token: req.headers["x-access-token"],
    }).exec();
    console.log("token >>>>", token);
    if (!token) return unauthorized(res, null);
    const user = await User.findById(token.userId).exec();
    console.log("user is >>>>", user);
    if (!user) return unauthorized(res, null);
    // if (token.liveTime < date) {
    //   await Token.findByIdAndRemove(token._id).exec();
    //   return unauthorized(res);
    // } else {
    // let values = {};
    // const hours = Math.abs(token.liveTime - date) / 36e5;
    // if (hours <= 1) {
    //   let liveTime = token.liveTime;
    //   liveTime.setHours(liveTime.getHours() + 5);
    //   values = { ...values, liveTime };
    // }
    // if (token.lastIp != req.connection.remoteAddress)
    // values = { ...values, lastIp: req.connection.remoteAddress };
    // await Token.findByIdAndUpdate(token._id, values).exec();
    // const Transform = await transform(user, itemTransform);
    // return response(res, 200,user);
    //  console.log(res);
    // res.status(201).json({ Transform });
    next();
    // }
  } catch (err) {
    return unauthorized(res, 500);
  }
};
