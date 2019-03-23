#! /usr/local/bin/node

const query = require('./db-query');


let command = process.argv.slice(2)[0];
let table = process.argv.slice(3)[0];

query(table, command);