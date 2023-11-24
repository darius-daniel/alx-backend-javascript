const expect = require('chai').expect;
const e = require('express');
const request = require('request');

describe('API Test', () => {
  const url = 'http://localhost:7865';

  it('Index Page', (done) => {
    request(`${url}/`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done()
    });
  });
  it('Cart page when id is a number', (done) => {
    request(`${url}/cart/12`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  });
  it('Cart page when id is a not number', function (done) {
    request(`${url}/cart/harold`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
  it('Available Payments', (done) => {
    request(`${url}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.deep.equal(
        JSON.stringify({
          payment_methods: {
            credit_cards: true,
            paypal: false
          }
      }));
      done();
    });
  });
  it('Login', (done) => {
    request.post(`${url}/login`, {json: {'userName': 'Betty'}}, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome ');
      done();
    })
  })
});
