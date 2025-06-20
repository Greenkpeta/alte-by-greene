const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { type } = require("express/lib/response");

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

// user log in schema
const userLogInSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const shopperSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    category: { type: String, require: true },
    brand: { type: String, require: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

// Hash password before saving
shopperSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.pre("save", async function (next) {
  if (!this.isModified) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare passwords later (for login)
shopperSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, password);
};

const User = mongoose.model("User", userSchema);
const ShopperUser = mongoose.model("ShopperUser", shopperSchema);
const UserLogIn = mongoose.model("UserLogIn", userLogInSchema);

module.exports = {
  User,
  ShopperUser,
  UserLogIn,
};
