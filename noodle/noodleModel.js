const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const noodleSchema = new Schema({
  name: {
    type: String,
    require: [true, "noodle's name is required"],
  },
  img: String,
  price: {
    type: Number,
    default: 0,
  },
  body: String,
  category: {
    type: String,
    enum: ["makanan", "minuman", "tambahan"],
    require: [true, "noodle's name is required"],
  },
  discount: {
    type: Number,
    default: 0,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

const noodleModels = mongoose.model("noodles", noodleSchema);
module.exports = noodleModels;
