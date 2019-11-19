const path = require('path');
const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(8000, function () {
  console.log("Example app listening at http://localhost:8000")
})