const expect = require('chai').expect;
const e = require('express');
const request = require('request');

describe('API Test', () => {
  it('Index Page', (done) => {
    request('http://127.0.0.1:7865/', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done()
    });
  });
  it('Cart page when id is a number', (done) => {
    request('http://127.0.0.1:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      done();
    });
  })
  it('Cart page when id is a not number', (done) => {
    request('http://127.0.0.1:7865/cart/John', (error, response, body) => {
      expect(response.statusCode).to.be.equal(404);
      done();
    });
  });
  it('Available Payments', (done) => {
    request('http://127.0.0.1:7865/available_payments', (error, response, body) => {
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
    request.post('http://127.0.0.1:7865/login', {json: {'userName': 'Betty'}}, (error, response, body) => {
      expect(response.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome ');
      done();
    })
  })
});
