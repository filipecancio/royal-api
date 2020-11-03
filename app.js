const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

const home = require('./src/util/home.json');
const contacts = require('./src/util/contacts.json');
const transactions = require('./src/util/transactions.json');
const query = require('./src/util/transactionsQuery.json');

const db_user = process.env.DATABASE_USER;
const db_pass = process.env.DATABASE_PASS;
const db_name = process.env.DATABASE_NAME;

const app = express();

app.use(express.json());
app.use(cors());


mongoose.connect(
    `mongodb+srv://${db_user}:${db_pass}@cluster0.jizof.mongodb.net/${db_name}?retryWrites=true&w=majority`,
    {
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology: true
    }
);


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