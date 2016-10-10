const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');

const index = require('../index.js');

chai.use(chaiAsPromised);

describe('Function foo', () => {
    it('should resolve any number except 1', () => {
        'use strict';
        let promise = index.foo(2);
        return expect(promise).to.eventually.equal(2);
    });
    it('should reject when supplied a 1', () => {
        'use strict';
        let promise = index.foo(1);
        return expect(promise).to.be.rejectedWith('Found an error');
    });
});