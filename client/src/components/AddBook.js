import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery, getAuthorsQuery , addBookMutation} from '../queries/query';
import { compose } from "recompose";


class AddBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            genre: '',
            authorId: ''
        };

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(values) {
        console.log(this.state);
        this.props.addBookMutation({
                variables: {
                    name: this.state.name,
                    genre: this.state.genre,
                    authorId: this.state.authorId
                },
                refetchQueries: [{ query: getBooksQuery }]
            });       
    }

    displayAuthors() {
        var data = this.props.getAuthorsQuery;

        if (data.loading) {
            return (<option disabled>Loading authors</option>)
        }
        else {
            return data.authors.map(author => {
                return (
                    <option key={author.id} value={author.id}>{author.name}</option>
                )
            })
        }
    }



    render() {
        console.log(this.props)
        return (
            <form id="add-book" onSubmit={(values) => this.handleSubmitForm(values)}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />

                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" onChange={(e) => this.setState({ genre: e.target.value })} />
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={(e) => this.setState({ authorId: e.target.value })} >
                        <option>Select author</option>
                        {this.displayAuthors()}
                    </select>
                </div>
                <button>Add Book</button>

            </form>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);