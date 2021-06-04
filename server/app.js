const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

var url = "mongodb://127.0.0.1:27017/";
var dbName = "library";
var serverUrl = 'mongodb://127.0.0.1:27017/library';

const hostname = 'localhost';
const port = 4000;

mongoose.connect(serverUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
  function (err, dbName) {
    console.log(serverUrl + ' db conneted to database');
  });



// bind express with graphql
app.use('/graphql', graphqlHTTP({  
schema,
graphiql : true
}));

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

