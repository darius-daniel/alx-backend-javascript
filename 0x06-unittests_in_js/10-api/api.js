const express = require('express');

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

app.get('/available_payments', (request, response) => {
  response.send(JSON.stringify({
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    })
  );
});

app.post('/login', (request, response) => {
  let username = '';

  if (request.body) {
    username = request.body.userName;
  }

  response.send(`Welcome ${username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
