var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");

var port = process.env.PORT || 4000;

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

// more middleware (executes after routes)
app.use('/',routes);

app.listen(port, function () {
    console.log("listening on port " + port);
})
