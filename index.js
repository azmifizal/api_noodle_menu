// import node_modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
// mongoose.connect(
//   "mongodb://userNoodle:noodle123@ds157509.mlab.com:57509/portofolio",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
mongoose.connect(
  "mongodb+srv://userNoodle:noodle123@portofolio.2oiqu.mongodb.net/portofolio?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// middleware routing
app.get("/", (req, res) => {
  res.json({ message: "server-connected" });
});

const noodleRouters = require("./noodle/noodleRoute");
noodleRouters.routersConfig(app);

app.use((err, req, res, next) => {
  res.status("422").send({ message: err.message });
});

let sv = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on ${sv.address().port}`);
});
