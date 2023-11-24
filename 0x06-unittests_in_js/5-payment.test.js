const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');

describe('5. Hooks', function () {
  const sandbox = sinon.createSandbox();
  let a;
  let b;

  beforeEach(() => {
    sandbox.spy(console, 'log');
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('call sendPaymentRequestToApi with 100, 20', function () {
    a = 100;
    b = 20;

    sendPaymentRequestToApi(a, b);
    expect(console.log.calledOnceWith(`The total is: ${a + b}`)).to.be.true;
  });
  it('call sendPaymentRequestToApi with 10, 10', function () {
    a = b = 10;

    sendPaymentRequestToApi(a, b);
    expect(console.log.calledOnceWith(`The total is: ${a + b}`)).to.be.true
  });
});
