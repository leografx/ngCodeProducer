import codeInterface from './code-interface';

const run = function(result, command, table) {
    if (command === 'interface' || command === 'i') {
        codeInterface(result, table, command);
    }

    if (command === 'class' || command === 'c') {
        codeInterface(result, table, command);
    }

    if (command === 'react' || command === 'r') {
        react(result, table, command);
    }

    console.log('CODE PRODUCED FROM TABLE:', table);
    console.log('Code ready to paste into your preferred text editor');
    console.log('Hack On!');
}

export default run;