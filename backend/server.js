const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/contactdb", {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

app.use("/contacts", contactRoutes);
app.listen(5000, () => {
  console.log("server started on port 5000");
});

//user details
//schema - user
//userControllers - crud,
//userRoutes - configure the route
//server.js - configure the main
