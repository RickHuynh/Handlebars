//create an ORM object for processing different database commands and export it

var connection = require("./connection");


function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

var orm = {
    all: function (cb) {
        var queryString = "select * from burgers";
        connection.query(queryString, function (err, data) {
            cb(data);
        })
    },
    create: function (cols, vals, cb) {
        var queryString = "insert into burgers";

        queryString += " (" + cols.toString() + ") values (" + printQuestionMarks(vals.length) + ");";
        console.log(queryString);
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    update: function (condObj, posObj, cb) {

        console.log(Object.keys(condObj));
        var queryString = "update burgers set ";

        queryString += Object.keys(condObj) + "=" + Object.values(condObj)
            + " where id=" + posObj;
        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;