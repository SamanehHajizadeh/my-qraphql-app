const express = require('express');

var { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');

const mongoose = require('mongoose');

var mongoDb = require('mongodb');
var mongoClient = mongoDb.MongoClient;
var serverUrl = "mongodb://127.0.0.1:27017/";
// var url = "mongodb+srv://samane:840921@cluster0.zuu8h.mongodb.net/myLibrary";



var dbName = "library";

var http = require('http');

const hostname = 'localhost';
const port = 4000;

// mongoClient.connect(serverUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
//    // Code goes here...
//    console.log('conneted to database');
// });


// mongoose.connect(serverUrl);
// mongoose.connection.once('open', () => {
//   console.log('conneted to database');
// });

mongoose.connect(serverUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const app = express();


// bind express with graphql
app.use('/graphql', graphqlHTTP({  
schema,
graphiql : true
}));

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

