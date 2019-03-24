import produce from './code-producer';
import singularize from './singularize';
import type from './code-type';

const codeInterface = function(data, table, command) {

    let objectType = isCommandInterface(command);

    let code = `export ${objectType} ${ singularize(table) } {\n`;

    for (let i = 0; i < data.length; i++) {
        code += '\t';
        code += `${ data[i].Field }: ${ type(data[i].Type) };`;
        code += '\n';
    }

    code += '} \n';

    // generates code
    produce(code);
}

function isCommandInterface(command) {
    return (command === 'i' || command === 'interface') ? 'interface' : 'class';
}

export default codeInterface;