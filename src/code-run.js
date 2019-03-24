import codeInterface from './code-interface';
import react from './code-react-form';
import reactHTML from './code-react-form-html';

const run = function(result, command, table) {
    if (command === 'interface' || command === 'i') {
        codeInterface(result, table, command);
    }

    if (command === 'class' || command === 'c') {
        codeInterface(result, table, command);
    }

    if (command === 'reactive' || command === 'r') {
        react(result, table, command);
    }

    if (command === 'reactive-html' || command === 'rh') {
        reactHTML(result, table, command);
    }

    console.log('CODE PRODUCED FROM TABLE:', table);
    console.log('Code ready to paste into your preferred text editor');
    console.log('Hack On!');
}

export default run;