const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const DAO = require("./DataAccessObject");

var isUserLoggedIn = false;

const app = express();
const PORT = process.env.PORT || 3000;

var User = {};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //Get session ID for session management
  let UserID = req.params.UserID;

  if (UserID !== parseInt(0)) {
    isUserLoggedIn = true;
  } else {
    isUserLoggedIn = false;
  }

  if (!isUserLoggedIn) {
    res.redirect("/loginPage");
  } else {
    User = DAO.getUser(UserID);

    res.render("dashboard", User);
  }
});

app.get("/loginPage", (req, res) => {
  res.render("loginPage");
});

app.get("/index", (req, res) => {
  //Get session ID for session management
  let UserID = 43;
  let lFlag = req.params;
  //lFlag = "true";
  if (lFlag === "true") {
    isUserLoggedIn = true;
    //UserID = req.body.userId;
  } else {
    isUserLoggedIn = false;
  }

  if (!isUserLoggedIn) {
    res.redirect("/loginPage");
  } else {
    User = DAO.getUser(UserID);

    res.render("dashboard", User);
  }
});

app.get("/loginPage", (req, res) => {
  res.render("loginPage");
});

app.post("/login", (req, res) => {
  let Username = req.body.username;
  let Password = req.body.password;

  var UserID = DAO.getLogin(Username, Password);
  User = DAO.getUser(UserID);

  res.json(User);
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

app.post("/api/GetWorkouts/data.js", (req, res) => {});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
