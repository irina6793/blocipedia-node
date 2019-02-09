module.exports = {
  init(app){
     const staticRoutes = require("../routes/static");
     const topicRoutes = require("../routes/topics");
     const userRoutes = require("../routes/user");

    app.use(staticRoutes);
    app.use(topicRoutes);
    app.use(userRoutes);
  }
}
