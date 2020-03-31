
const express = require('express');

const app = express();

app.get('/', (request, response)=> {
  response.json({ msg: 'hello, world'});
});

app.listen(3333);