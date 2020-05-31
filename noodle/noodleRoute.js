const noodleMiddleware = require("./noodleMiddleware");

exports.routersConfig = (app) => {
  app.get("/v1/noodles", noodleMiddleware.getAll);

  app.get("/v1/noodle", noodleMiddleware.getSearch);

  app.get("/v1/noodle/category/:category", noodleMiddleware.getCategory);

  app.get("/v1/noodle/variant/:variant", noodleMiddleware.getVariant);

  app.post("/v1/noodle", noodleMiddleware.create);
};
