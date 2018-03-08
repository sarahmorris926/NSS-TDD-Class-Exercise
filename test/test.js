const { createTables } = require("../js/makeTable");

const {
  getCustomers,
  getCustomer,
  addCustomer,
  deleteCustomer
} = require("../js/customersModule");

const {
  assert: { equal, isFunction, isObject, isArray, deepEqual }
} = require("chai");

describe("customers module", () => {
  describe("getCustomers", () => {
    it("should be a function", () => {
      isFunction(getCustomers);
    });
    it("should return an array of objects", () => {
      isArray(getCustomers());
      isObject(getCustomers()[0]);
    });
  });

  describe("adding a customer", () => {
    let newCust = {
      firstName: "Pat",
      lastName: "Smith",
      city: "Nowhere",
      street: "IDK St",
      state: "Alabama",
      zip: "22288",
      phone: "555-555-5555"
    };
    beforeEach(done => {
      createTables().then(() => {
        done();
      });
    });
    it("should return an object", () => {
      return addCustomer(newCust).then(data => {
        isObject(data);
      });
    });
    it("should add a new customer to the db", () => {
      return addCustomer(newCust).then(obj => {
        equal(9, obj.id);
      });
    });
  });

  describe("get a customer", () => {
    it("should be a function", () => {
      isFunction(getCustomer);
    });
    it("should return one customer's data", () => {
      getCustomer("555-555-5555")
        .then(customer => {
          deepEqual(customer, customer);
        })
        .catch(err => {
          console.log("error getting a customer", err);
        });
    });
  });

  describe('delete a customer', () => {
      it('should be a function', () => {
          isFunction(deleteCustomer);
      })
      it('should delete one customer', () => {
        let custToDelete = {
            firstName: "Daniel",
            lastName: "Delete",
            city: "Abyss",
            street: "Nowhere Street",
            state: "Texas",
            zip: "77777",
            phone: "777-777-7777"
          };
        
        return deleteCustomer(custToDelete)
        .then()
      })
  })
});
