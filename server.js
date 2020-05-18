const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(7777, function () {
  console.log('Example app listening at http://localhost:7777')
});
