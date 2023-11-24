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
  })
});
