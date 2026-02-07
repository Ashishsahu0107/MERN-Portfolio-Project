const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/user", userRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/mernPortfolio")
.then(() => console.log("MongoDB Connected"));

app.listen(5000, () => console.log("Server running on port 5000"));
