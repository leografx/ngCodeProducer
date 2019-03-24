import produce from './code-producer';
import singularize from './singularize';

const react = function(data, table, command) {

    let code = 'export class ' + singularize(table).toLowerCase() + 'Component {';
    code += '\n';
    code += `\t${ singularize(table).toLowerCase() }Form = this.fb.group({`;
    code += '\n';

    for (let i = 0; i < data.length; i++) {
        code += `\t\t${ data[i].Field }: [''],\n`;
    }
    code += `\t});\n`;
    code += '\n\t';
    code += `constructor(private fb: FormBuilder) { }`;
    code += '\n';

    code += `\t onSubmit() {\n`;
    code += `\t\t console.log(${ singularize(table).toLowerCase() }Form.value);`;
    code += '\n\t}';
    code += '\n}';

    produce(code);
}

export default react;