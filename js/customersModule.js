"use strict";

const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("acme.sqlite");

// add customer (C)
module.exports.addCustomer = ({
  firstName,
  lastName,
  city,
  street,
  state,
  zip,
  phone
}) => {
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO customers VALUES(
            null,
            "${firstName}",
            "${lastName}",
            "${city}",
            "${street}",
            "${state}",
            "${zip}",
            "${phone}"
        )`,
      function() {
        resolve({ id: this.lastID });
      }
    );
  });
};

// get all customers (R)
module.exports.getCustomers = () => {
  return [{}];
};

// get one customer (R)
module.exports.getCustomer = phone => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT firstName, lastName FROM customers WHERE phone = "${phone}"`,
      (err, customer) => {
        if (err) {
          console.log("error getting a customer", err);
          reject(err);
        }
        resolve(customer);
      }
    );
  });
};

// update customer (U)

// delete customer (D)

module.exports.deleteCustomer = () => {
    return new Promise((resolve, reject) => {
        db.run()
    })
}
