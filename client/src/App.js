
import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//Component
import BookList from "./components/BookList";
import AddBook from './components/AddBook';


//Apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

//ApolloProvider for injecting data from server to our client
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <div className="App" id="main">

          <BookList />
          <AddBook />

        </div>
      </ApolloProvider>

    );
  }
}
export default App;