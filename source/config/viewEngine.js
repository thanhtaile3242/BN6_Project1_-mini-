const express = require("express");
const configViewEngine = (app) => {
    // Configure ViewEngine files (HTML)
    app.set("view engine", "ejs");
    // Configure Static files (CSS, Images and JS)
    app.use(express.static("./public"));
};

module.exports = configViewEngine;
