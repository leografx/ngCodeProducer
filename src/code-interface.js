const fs = require('fs');
import { exec } from 'child_process';
import singularize from './singularize';

module.exports = function(data, table, command) {
    let objectType = (command === 'i' || command === 'interface') ? 'interface' : 'class'

    let code = `export ${objectType} ${ singularize(table) } `;
    let type = "";

    for (let i = 0; i < data.length; i++) {
        type = (data[i].Type.includes('int')) ? 'int' : 'string';
        let line = `${ data[i].Field }: ${ type };`;
        code += '\t';
        code += line + '\n';
    }

    code += '} \n';

    fs.writeFile('tmp.txt', code, 'utf8', () => {
        exec('cat tmp.txt | pbcopy');
        process.exit();
    });

}