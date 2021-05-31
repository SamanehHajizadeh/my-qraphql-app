const { trace } = require('console');
const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const { renderGraphiQL } = require('express-graphql/renderGraphiQL');
var { buildSchema } = require('graphql');
const schema = require('./schema/schema');

http = require('http');

const hostname = 'localhost';
const port = 4000;

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({  
schema,
graphiql : true
}));

  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

