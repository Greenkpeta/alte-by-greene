const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/routers.js");
const public_router = require("./routes/public_router.js");
const connectDB = require("./config/db.js");
const path = require("path");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Set the view engine to ejs
app.set("view engine", "ejs");

// Set the views directory (optional if using default "views")
app.set("views", path.join(__dirname, "views"));
// serve static files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api", router);

app.use("/", public_router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
