var express = require("express");

var router = express.Router();

var burger = require('../models/burger');

router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgerObj = { burgers: data };
        res.render("index", burgerObj);
    })
});

router.post("/burgers", function (req, res) {
    burger.create(["name", "devoured"], [req.body.name, 0], function () {
        console.log("making burger");
    })
})

router.put("/:id-:devoured", function (req, res) {
    burger.update(
        { devoured: req.params.devoured },
        req.params.id,
        function (data) {
            console.log(data);
        })
    res.redirect("/");
})

module.exports = router;