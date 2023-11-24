const sinon = require('sinon');
const expect = require('chai').expect;
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it("Async tests with done", function (done) {
    const stub = sinon.stub(getPaymentTokenFromAPI);

    getPaymentTokenFromAPI(true)
      .then((data) => {
        expect(data).to.deep.equal({data: 'Successful response from the API' });
        done();
      });
  });
})
