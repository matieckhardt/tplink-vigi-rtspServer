const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const exphbs = require("express-handlebars");
const config = require("./config");
const path = require("path");
const app = express();
const fs = require("fs");

app.set("PORT", process.env.PORT || 4000);

app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partials: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    defaultLayout: "main",
  })
);
app.set("view engine", ".hbs");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/dist")));
app.use(express.static(path.join(__dirname, "public/plugins")));
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

// Ruta del index
app.get("/", function (req, res) {
  res.render("index");
});

//SERVER RESET
app.get("/reset", function (req, res) {
  console.log("restarting");
  fs.writeFileSync("./resets.js", JSON.stringify([{ lastReset: new Date() }]));
  console.log("System rebooted");
  res.send("System Rebooted");
});

// RTSP SERVER

require("./rtspServer");

//FIN SERVER

module.exports = app;
