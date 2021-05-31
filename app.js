const express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
http = require('http');

const hostname = 'localhost';
const port = 4000;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    // pass in a schema property
    schema: schema,
    rootValue: root,
    graphiql: true,
})
);


  app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });  

