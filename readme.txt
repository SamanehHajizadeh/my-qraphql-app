*** author with lists of books***


1.mkdir NodeJS & go inside
2.npm init
3.Create index.js file
4.npm start

Add node_modules to .gitignore
npm install express --save

npm install --save express-graphql
check http://localhost:4000/graphql:
This screen shot shows the GraphQL query { hello } being issued and giving a result of { data: { hello: 'Hello world!' } }

npm install lodash
http://localhost:4000/graphql in url in graphiql:
Find book:
{
  book(id:1){
    id,
    genre,
    name
  }
}

Find author:
{
  author(id: 1) {
    id
    name
    age
  }
} 

Find book and belongs'author:
{
  book(id: 1) {
    id
    name
    author{
    name
    age
  }
 }
}

Find author with his books':
{
  author(id: 1) {
    id
    name
    books{
    name
  }
 }
}

Find all books/authors :
{
  authors {
    id
    name
    books{
    name
  }
 }
}
-------------------------------------
npm install mongodb --save
npm install mongoose --save

mkdir data
mkdir db
inside data/db:
mongod --dbpath= --bind_ip 127.0.0.1

***
Open another command window and then type :
mongo
db
usr library --(library is my DB name herer)
dbdb.help()
****
db.books.insert({ name: "hafez", genre: "Poem",id: '1', authorId: '1' });
db.books.find.pretty();
db.books.deleteMany() 
 var id = new ObjectId();
id.getTimestamp();

**
  mutation {
    addAuthor(name: "Samane", age : 36)
    {
      name
      age }
  }
----------------------------------
db.createUser({user: "username", pwd: "password", roles: ["dbAdmin"]})
----------------------------------
// var books = [
//     { name: 'Name of the Wind', genre: 'Fantasy', id: '1' },
//     { name: 'The Final Empire', genre: 'Fantasy', id: '2' },
//     { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' },
//     { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId:'1' },
//     { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId:'2'},
//     { name: 'The Long Earth', genre: 'Sci-Fi', id: '3' ,authorId:'3'},
// ];
// var authors = [
//     { name: 'Patrick Rothfuss', age: 44, id: '1' },
//     { name: 'Brandon Sanderson', age: 42, id: '2' },
//     { name: 'Terry Pratchett', age: 66, id: '3' }
// ];
