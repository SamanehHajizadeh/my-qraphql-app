import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery} from '../queries/query';

class BookDetails extends Component {
    displayBookDetail() {
        var {book }= this.props.data;

        if (book) {
            return (
                <div>
                  <h2>{book.name}</h2>
                   <h2>{book.genre}</h2>
                   <h2>{book.author.name}</h2>
                   <h3>
                       all books of relaed Author
                   </h3>
                   <ul className="other-books">
                        { book.author.books.map(item => {
                            return <li key={item.id}>{ item.name }</li>
                        })}
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div>
                    No Book seleced!
                </div>
            )
        }
    }

    render() {
        console.log(this.props)
        return (
            <div id= "book-details">
                <ul>{this.displayBookDetail()}</ul>
            </div>
        )
    }

}

// {} 
export default graphql(getBookQuery, {
    options :(props)=>{
        return {
            variables : {
               id:  props.bookId
            } 
        } 
    } 
 })(BookDetails);