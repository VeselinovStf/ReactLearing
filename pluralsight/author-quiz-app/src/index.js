import React from 'react';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';
import { shuffle, sample } from 'underscore';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import AddAuthor from './Author/AddAuthor';

const authors = [
  {
    name: 'Mark Twain',
    imageUrl: './images/authors/marktwain.jpg',
    imageSource: 'Wikipedia',
    books: ['The Adventures of Huckleberry Finn', ' The Adventures of Tom Sawyer', ' The Mysterious Stranger']
  },
  {
    name: 'Ivan Vazov',
    imageUrl: './images/authors/ivanVazov.jpg',
    imageSource: 'Wikipedia',
    books: ['Under the Yoke', 'Epic of the Forgotten', 'Немили-недраги']
  },
  {
    name: 'Hristo Botev',
    imageUrl: './images/authors/hristoBotev.jpg',
    imageSource: 'Wikipedia',
    books: ['Elegy', 'To My Mother', 'Struggle']
  },
];


function getTurnData(authors) {

  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);

  const foundRandomBook = shuffle(allBooks).slice(0, 4);
  const answer = sample(foundRandomBook);

  return {
    books: foundRandomBook,

    author: authors.find(
      (author) =>
        author.books.some((title) => title === answer)
    )
  }

}

function reducer(
    state = {authors, turnData: getTurnData(authors), highlight: '', }, 
    action) {

      switch (action.type) {
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some((book) => book === action.answer);
            return Object.assign({

            },
            state, {highlight: isCorrect ? 'win' : 'lose'}
            )
        case 'CONTINUE':
              return Object.assign(
                {},
                state,
                {
                  highlight: '',
                  turnData: getTurnData(state.authors)
                }
              )   
        case 'ADD_AUTHOR':
          return Object.assign({},state,
            {
            authors: state.authors.concat([action.author])
          });
        default:
          return state;
      }
}

let store = Redux.createStore(reducer);


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={AuthorQuiz} />
          <Route exact path="/addAuthor" component={AddAuthor} />
        </React.Fragment>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
