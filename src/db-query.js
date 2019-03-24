import con from './db-connection';
import run from './code-run';

const query = function(table, command) {

    const sql = `SHOW FIELDS FROM  ${table}`

    con.query(sql, function(err, result) {

        if (err) throw err;

        run(result, command, table);
    });
}

export default query;