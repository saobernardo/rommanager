const mainAuth = require("../config/middlewares/mainAuth");
const homeController = require("../controllers/HomeController");

module.exports = (app) => {
  app.get('/', homeController.main());
};