const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/dbConfig");
const path = require("path");
// const errorHandler = require("./middleware/error");
require("colors");

// Load env vars
const envPath = path.join(__dirname, "/config/config.env");
dotenv.config({ path: envPath });

// Routes files
const routes = require("./routes/routes");

// Connect to database
connectDB();

const app = express();

// body parser
app.use(express.json());

// Cookie Parser
app.use(cookieParser());

// cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.use("/api/v1", routes);

// // errorHandler
// app.use(errorHandler)

const PORT = process.env.PORT || 7000;
const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// Handle unhandled promise rejections
process.on("unhandeledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`.red.bold);
  // Close server & exit process
  server.close(() => process.exit(1));
});