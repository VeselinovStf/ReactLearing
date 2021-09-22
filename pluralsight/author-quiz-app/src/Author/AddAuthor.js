import React from 'react';
import Title from '../Title/Title';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

class AuthorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            books: [],
            tempBook: ''
        }
        this.onFieldChange = this.onFieldChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAddBook = this.handleAddBook.bind(this);
    }

    handleAddBook(event){ 
        this.setState({
            books: this.state.books.concat([this.state.tempBook]),
            tempBook : ''
        })
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.onAddAuthor(this.state)
    }

    onFieldChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="authorName">New Author Name:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Author Name" 
                        required 
                        name="name"
                        value={this.state.name} 
                        onChange={this.onFieldChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="imageUrl">New Author Image:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Author Image" 
                        required 
                        name="imageUrl"
                        value={this.state.imageUrl}
                        onChange={this.onFieldChange} />
                </div>
                <div className="form-group">
                    {this.state.books.map((b) => <p key={b}>{b}</p>)}
                    <label htmlFor="imageUrl">Add Author Book:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Enter Author Image" 
                         
                        name="tempBook"
                        value={this.state.tempBook}
                        onChange={this.onFieldChange} />
                    <input 
                        type="button" 
                        className="btn btn-info"
                        onClick={this.handleAddBook}
                        />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary">Add Author</button>
            </form>
        )
    }
}

function AddAuthor({match, onAddAuthor}) {
    return (
        <div className="container">
            <Title />
            <div className="col-md-4">
                <h2>Add Author</h2>
                <AuthorForm onAddAuthor={onAddAuthor}/>
            </div>

        </div>

    )

};

function mapDispatchProps(dispatch, props){
    return {
        onAddAuthor : (author) => {
            dispatch({type: 'ADD_AUTHOR', author})
            props.history.push('/');
        }

    }
}

export default withRouter(connect(()=>{}, mapDispatchProps)( AddAuthor));