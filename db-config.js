const mysql = require('mysql');

module.exports = function() {
    const con = mysql.createConnection({
        host: "127.0.0.1",
        user: "nmdtruck",
        password: "gregory121271",
        database: "nmdtruck_nmd",
        port: '8889'
    });

    con.connect(function(err) {
        if (err) trow(err);
        console.log("Connected!");
        // module.exports.con = con;
    });

    function trow(error) {
        console.log('ERROR:', error);
    }

    return con;
}();