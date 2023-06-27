const AuthenticationControler = require("./controllers/AuthenticationController");

module.exports = (app) => {
  app.get("/status", (req, res) => {
    res.send({
      message: "Hi",
    });
  });

  app.post("/register", AuthenticationControler.register);
};
