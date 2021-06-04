import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery} from '../queries/query';

class BookDetails extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div id= "BookList">
                <ul>displayBookDetails</ul>
            </div>
        )
    }

}

export default graphql(getBookQuery)(BookDetails);