const Noodle = require("./noodleModel");

exports.getAll = async (req, res, next) => {
  try {
    const find = await Noodle.find({});
    return res.status(200).json({ result: find });
  } catch (error) {
    return next;
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Noodle.find({
      category: { $regex: req.params.category, $options: "i" },
    });
    return res.status(200).json({ result: category });
  } catch (error) {
    return next(error);
  }
};

exports.getVariant = async (req, res, next) => {
  try {
    const variant = await Noodle.find({
      name: { $regex: req.params.variant, $options: "i" },
      category: "makanan",
    });
    return res.status(200).json({ result: variant });
  } catch (error) {
    return next(error);
  }
};

exports.getSearch = async (req, res, next) => {
  try {
    const search = await Noodle.find({
      name: { $regex: req.query.search, $options: "i" },
    });
    return res.status(200).json({ result: search });
  } catch (error) {
    return next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const create = await Noodle.create(req.body);
    return res.status(201).send(create);
  } catch (error) {
    return next;
  }
};
