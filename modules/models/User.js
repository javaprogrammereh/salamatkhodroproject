const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: { type: String },
  userRef: { type: mongoose.Schema.Types.ObjectId, ref: "User", null: true },
  provider: { type: String },
  username: { type: String, unique: true, required: true, trim: true },
  mobile: { type: String, unique: true, required: true, trim: true },
  contact: { type: String },
  email: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["basic", "user", "admin"] },
  credit: { type: Number },
  accessToken: { type: String },
  active: { type: Boolean },
  address: [{ type: Schema.Types.ObjectId, ref: "Address", required: false }],
  transaction: [
    { type: Schema.Types.ObjectId, ref: "Transaction", required: false },
  ],
});
UserSchema.plugin(uniqueValidator);
UserSchema.pre("save",function(next){
  let user = this;
  if(!user.isModified("password")) return next();
  bcrypt.hash(user.password,10,(err,hash)=>{
      if(err) return next(err);
      user.password=hash;
      next();
  });  
});
module.exports = mongoose.model("User", UserSchema);
