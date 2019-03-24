import produce from './code-producer';
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
    produce(code);
}