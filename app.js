const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Deu Certo').end();
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;