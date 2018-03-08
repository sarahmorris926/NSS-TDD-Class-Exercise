'use strict';

const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('acme.sqlite', () => {
    console.log('Connection to DB successful');
});

module.exports.getCustomers = () => {
    return [{}];
}

module.exports.addCustomer = () => {
    return new Promise( (resolve, reject) => {
        db.run(`INSERT INTO customers VALUES(
            
        )`)
        resolve({id: 9});
    });
}