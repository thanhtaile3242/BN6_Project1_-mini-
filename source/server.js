const express = require("express");
const app = express();
// ENV
const port = 3242|| 8888;
const hostName = "localhost";
// View Engine
const configViewEngine = require("./config/viewEngine.js");
configViewEngine(app);
// Config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
const webRouter = require("./routes/web");
app.use("/", webRouter);
// Run webserver
app.listen(port, hostName, () => {
    console.log("example running on", port);
});
