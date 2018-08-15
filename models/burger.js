var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all(function (res) {
            cb(res);
        })
    },
    create: function (cols, vals, cb) {
        orm.create(cols, vals, function (res) {
            cb(res);
        })
    },
    update: function (condObj, posObj, cb) {
        if(condObj.devoured == "1"){
            var condition = 0;
        }else{
            var condition = 1;
        }
        orm.update({
            devoured: condition
        }, posObj, function (res) {
            cb(res);
        })
    }

}

module.exports = burger;