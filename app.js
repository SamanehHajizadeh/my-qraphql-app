const express = require('express');

var { graphqlHTTP } = require('express-graphql');
const { renderGraphiQL } = require('express-graphql/renderGraphiQL');
var { buildSchema } = require('graphql');
const schema = require('./schema/schema');

const assert = require('assert');

var mongoDb = require('mongodb');
var mongoClient = mongoDb.MongoClient;
var serverUrl = "mongodb://127.0.0.1:27017/";
var dbName = "library";

var http = require('http');

const hostname = 'localhost';
const port = 4000;

mongoClient.connect(serverUrl, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
   // Code goes here...
});

const app = express();


// bind express with graphql
app.use('/graphql', graphqlHTTP({  
schema,
graphiql : true
}));

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

