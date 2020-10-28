const express = require('express');
const cors = require('cors');
const home = require('./src/util/home.json');
const contacts = require('./src/util/contacts.json');
const transactions = require('./src/util/transactions.json');
const query = require('./src/util/transactionsQuery.json');


const app = express();

app.use(express.json());
app.use(cors());

app.get('/home',(request,response)=>{
    return response.json(home);
});

app.get('/contacts',(request,response)=>{
    return response.json(contacts);
});

app.get('/transactions',(request,response)=>{
    return response.json(transactions);
});

app.get('/query',(request,response)=>{
    return response.json(query);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});

module.exports = app;