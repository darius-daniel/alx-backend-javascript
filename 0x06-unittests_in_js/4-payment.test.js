const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function () {
  it("Validate the usage of the Utils function", function () {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);
    const spy = sinon.spy(console, 'log');

    const a = 100;
    const b = 20;
    const type = 'SUM';

    sendPaymentRequestToApi(a, b);
    expect(Utils.calculateNumber.calledOnceWith(type, a, b)).to.be.true;
    expect(console.log.calledOnceWith('The total is: 10')).to.be.true;
    stub.restore();
    spy.restore();
  });

});
