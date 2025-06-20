//

exports.HomePage = async (req, res) => {
  res.render("index", { title: "home page", user: "Nelson" });
};

exports.aboutPage = async (req, res) => {
  res.render("about", { title: "about page" });
};
