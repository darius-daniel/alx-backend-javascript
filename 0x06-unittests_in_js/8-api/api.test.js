const expect = require('chai').expect;
const request = require('request');

describe('Index page', () => {
  it('', (done) => {
    request('http://127.0.0.1:7865/', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done()
    });
  });
});
