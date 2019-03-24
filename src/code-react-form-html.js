import singularize from "./singularize";
import produce from "./code-producer";


const reactHTML = function(data, table, command) {
    let html = `<form [formGroup]="${ singularize(table).toLowerCase() }Form" (ngSubmit)="onSubmit()">\n`;

    // input fields
    for (let i = 0; i < data.length; i++) {
        html += `\t<label>\n`;
        html += `\t\t${ title( data[i].Field.replace('_',' ')) }\n`;
        html += `\t\t<input type="text" formControlName="${data[i].Field}"/> \n`;
        html += `\t<\label>\n\n`;
    }






    // submit button
    html += `\t<button> type="submit" [disabled]="!${ singularize(table.toLowerCase()) }Form.valid">Submit</button>`;
    html += '\n\n';
    html += '</form>';
    produce(html);
}

function title(str) {
    return str.replace(/(^|\s)\S/g, function(t) { return t.toUpperCase() });
}


export default reactHTML;