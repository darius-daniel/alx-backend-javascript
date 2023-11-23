const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", function () {
  const sandbox = sinon.createSandbox();

  beforeEach(function () {
    sandbox.spy(Utils); 
  });

  afterEach(function () {
    sandbox.restore();
  });

  it("Validate the usage of the Utils function", function () {
    sendPaymentRequestToApi(100, 20);
    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
  });
});
