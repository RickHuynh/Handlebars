var express = require("express");

var router = express.Router();

router.get("/",function(req,res){
    cat.all(function(data){
        res.render("index","hello");
    })
});

router.post("/",function(req,res){
    cat.create(["name","devoured"],[req.body.name,req.body.devoured], function(){
        //
    })
})

router.put("/:name", function(req,res){
    var condition = "name = " + req.params.name;

    cat.update(
        {devoured: req.body.devoured},
        condition,
        function(){
            //
        })
})

module.exports = router;