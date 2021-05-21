const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
// .env config file for API
const dotend = require("dotenv");
dotend.config();

//======================= db connection ==========================
mongoose
  .connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(() => console.log("DB Connected!!! :)"));

// db connection - check if error
mongoose.connection.on("error", (err) => {
  console.log(`DB connection error: ${err.message}`);
});

// ===================ROUTES from external files======================
const postRoutes = require("./routes/post");

// ==================== middleware morgan ===========================
app.use(morgan("dev"));
app.use("/", postRoutes);

const port = 7999;
app.listen(port, () => {
  console.log(`use local host http://localhost:7999  -  nicly nice`);
});
