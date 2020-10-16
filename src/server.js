//imports
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//server
const server = express();
server
  //static files
  .use(express.static("public"))
  //handlebars
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")
  //routes
  .get("/", pages.index)
  .get("/orphanage", pages.orphanage)
  .get("/orphanages", pages.orphanages)
  .get("/create-orphanage", pages.createOrphanage);

server.listen(5500);