import mysql from 'mysql';
import auth from "./auth_private";

const connection = function() {
    const con = mysql.createConnection(auth);

    con.connect(function(err) {
        if (err) trow(err);
        console.log("Connected!");
    });

    function trow(error) {
        console.log('ERROR:', error);
    }

    return con;
}();

export default connection;