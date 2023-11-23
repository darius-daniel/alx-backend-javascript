const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function () {
  it("Validate the usage of the Utils function", function () {
    const spy = sinon.spy(Utils);
    const a = 100;
    const b = 20;
    const type = 'SUM';

    sendPaymentRequestToApi(a, b);
    expect(Utils.calculateNumber.calledOnceWith(type, a, b)).to.be.true;

    spy.calculateNumber.restore();
  });

});
