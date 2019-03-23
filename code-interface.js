const fs = require('fs');
const { exec } = require('child_process');
const pluralize = require('pluralize');



module.exports = function(data, table, command) {
    let objectType = (command === 'i' || command === 'interface') ? 'interface' : 'class'

    let code = `export ${objectType} ${ objectName(table) } `;
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

    function objectName(table) {
        let name = table[0].toUpperCase() + table.slice(1).toLowerCase();
        name = pluralize.singular(name);
        name += ' { \n';
        return name;
    }


}