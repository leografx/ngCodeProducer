const con = require('./db-config');
const interface = require('./code-interface');

module.exports = function(table, command) {
    console.log('TABLE:', table);
    const sql = `SHOW FIELDS FROM  ${table}`

    con.query(sql, function(err, result) {

        if (err) throw err;

        run(result);
    });

    function run(result) {
        if (command === 'interface' || command === 'i') {
            console.log('write interface');
            interface(result, table, command);
        }

        if (command === 'class' || command === 'c') {
            console.log('write class');
            interface(result, table, command);
        }
    }
}