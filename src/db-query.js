import con from './db-config';
import codeInterface from './code-interface';

const query = function(table, command) {
    console.log('TABLE:', table);
    const sql = `SHOW FIELDS FROM  ${table}`

    con.query(sql, function(err, result) {

        if (err) throw err;

        run(result);
    });

    function run(result) {
        if (command === 'interface' || command === 'i') {
            codeInterface(result, table, command);
        }

        if (command === 'class' || command === 'c') {
            codeInterface(result, table, command);
        }

        if (command === 'react-form' || command === 'r') {
            react(result, table, command);
        }
    }
}

export default query;