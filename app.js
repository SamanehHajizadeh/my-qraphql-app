const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

var serverUrl = "mongodb://127.0.0.1:27017/";
var dbName = "library";

const hostname = 'localhost';
const port = 4000;

// connect to mlab database
mongoose.connect('mongodb://127.0.0.1:27017/library');
mongoose.connection.once('open', () => {
  console.log('conneted to database');
});

// mongoose.connect(serverUrl,
//   { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
//   function (err, dbName) {
//     console.log(dbName.dbName + ' db conneted to database');
//   });



// bind express with graphql
app.use('/graphql', graphqlHTTP({  
schema,
graphiql : true
}));

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

