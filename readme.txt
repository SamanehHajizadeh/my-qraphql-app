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
    id,
    genre,
    name
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
