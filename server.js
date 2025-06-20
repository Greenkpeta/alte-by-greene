const express = require("express");
const dotenv = require("dotenv");
const router = require("./routes/routers.js");
const connectDB = require("./config/db.js");

dotenv.config();
connectDB();

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Routes
app.use("/api", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}`);
});
