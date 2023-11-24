const express = require('express');
const { head } = require('request');

const app = express();
const port = 7865

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id', (request, response) => {
  const id = parseInt(request.params.id);

  if (isNaN(id) === true) {
    response.status(404).send(response.header);
  } else {
    response.send(`Payment methods for cart ${id}`);
  }
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
