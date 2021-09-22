import React from 'react';
import './App.css';
import Continue from './Continue/Continue'
import Footer from './Footer/Footer'
import GameBoard from './Game/GameBoard';
import Title from './Title/Title';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProp(state) {
  return {
    turnData: state.turnData,
    highlight: state.highlight
  }
}

function mapDispatchToProps(dispath) {
  return {
    onAnswerSelected: (answer) => {
      dispath({type: 'ANSWER_SELECTED', answer})
    },
    onContinue: () => {
      dispath({type: 'CONTINUE'})
    }
  }
}

const AuthorQuiz = connect(mapStateToProp, mapDispatchToProps)(
  function ({ turnData, highlight, onAnswerSelected, onContinue }) {
    return (
      <div className="container-fluid">
        <Title />
        <GameBoard {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
        <Continue show={highlight === true} onContinue={onContinue} />
        <p>
          <Link to="/addAuthor" >Add Author</Link>
        </p>
        <Footer />
      </div>
    );
  })

export default AuthorQuiz;
