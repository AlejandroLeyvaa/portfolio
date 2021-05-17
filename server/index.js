const express = require('express');
const axios = require('axios').default;
require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
