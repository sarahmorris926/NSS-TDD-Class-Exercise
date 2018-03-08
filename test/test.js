const { createTables } = require('../js/makeTable');
const { getCustomers, addCustomer } = require('../js/customersModule');
const { assert: {equal, isFunction, isObject, isArray} } = require('chai');

describe('just a test', () => {
    it('should be equal', () => {
        equal(3, 1+2);
    });
});


describe('customers module', () => {
    describe('getCustomers', () => {
        it('should be a function', () => {
            isFunction(getCustomers);
        });
        it('should return an array of objects', () => {
            isArray(getCustomers());
        })
    });
    describe("adding a customer", () => {
        beforeEach( (done) => {
            createTables()
            .then( () => {
                done();
            })
        })
        it('should return an object', () => {
            return addCustomer()
            .then( (data) => {
                isObject(data);
            })
        })

    })
});

