import pluralize from 'pluralize';

const singularize = function(table) {
    let name = table[0].toUpperCase() + table.slice(1).toLowerCase();
    name = pluralize.singular(name);
    name += ' { \n';
    return name;
}

export default singularize;