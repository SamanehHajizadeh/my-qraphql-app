const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;


const bookSchema = require('./bookSchema');


// dummy data
var authors = [
    { name: 'Patrick Rothfuss', age: 44, id: '1' },
    { name: 'Brandon Sanderson', age: 42, id: '2' },
    { name: 'Terry Pratchett', age: 66, id: '3' }
];

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            type: new GraphQLList(bookSchema.BookType),
            resolve(parent, args) {
                // console.log(parent);
                return _.filter(books, { authorId: parent.id });

            }
        }
    })
});


var AuthorSchema = new GraphQLSchema({
    query: AuthorType
});

module.exports = AuthorSchema;