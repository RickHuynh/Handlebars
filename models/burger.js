var orm = require("../config/orm");

var burger = {
    all: function (cb) {
        orm.all(function (res) {
            cb(res);
        })
    },
    create: function (cb) {
        orm.create(cols, vals, function (res) {
            cb(res);
        })
    },
    update: function (cb) {
        orm.update(condObj, posObj, function (res) {
            cb(res);
        })
    }

}

module.exports = burger;