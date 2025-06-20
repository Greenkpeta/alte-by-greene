const { redirect } = require("express/lib/response.js");
const { User, ShopperUser, userLogIn } = require("../models/User.js");

// Create user for shopper
// controllers/usercontroller.js
exports.createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    // You can also add simple validation
    if (!fullName || !email || !password) {
      return res.status(400).render("signup", {
        errorMessage: "All fields are required.",
      });
    }

    const newUser = new User({ fullName, email, password });
    await newUser.save();
    return res.redirect("/");
  } catch (err) {
    return res.status(500).render("signup", {
      errorMessage: err.message || "Internal Server Error",
    });
  }
};

exports.userCreate = async (req, res) => {
  res.render("signup", { errorMessage: null });
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// User login
exports.brandLoginUser = async (req, res) => {
  try {
    const { fullName, password } = req.body;
    const user = User.find(fullName);

    if (!user) {
      return res.status(401).json({ user: "Username or password not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ user: "Username or password not found" });
    }

    req.session.user = user;
    res.json({ message: "Logged in successfully" });
    return redirect("/");
  } catch (err) {
    return res
      .status(201)
      .json({ user: "Something went wrong, please try again" });
  }
};

// create brand accounts
exports.createShopperUser = async (req, res) => {
  try {
    const { fullName, phoneNumber, password, category, brand, description } =
      req.body;
    const newShopperUser = ShopperUser.create({
      fullName,
      phoneNumber,
      password,
      category,
      brand,
      description,
    });
    await newShopperUser.save();
    return res
      .status(201)
      .json({ user: "New shopper user created successfully" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};
