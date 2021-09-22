import React from 'react';
import Book from './Book'
import PropTypes from 'prop-types'

function GameBoard({author,books, highlight,onAnswerSelected}){

    function highlightBgColor(highlight){
        const bgValues = {
            'none' : '',
            'win': 'green',
            'lost': 'red'
        };

        return bgValues[highlight];
    }    
    
    return(
            <div 
                className="row turn"
                style={ { backgroundColor: highlightBgColor(highlight)} }>
                <div className="col-4 offset-1">
                    <img 
                        src={author.imageUrl} 
                        className="authorimage" 
                        alt="Authpr" 
                        
                        ></img>
                </div>
                <div className="col-6" >
                        {books.map((title) => <Book onClick={onAnswerSelected} title={title} key={title}/> )}
                </div>
            </div>
        )  
}

//Validations
GameBoard.protoTypes = {
    author: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageSource: PropTypes.string.isRequired,
        books: PropTypes.arrayOf(PropTypes.string).isRequired,
      
    }),
    books: PropTypes.arrayOf(PropTypes.string).isRequired,
    highlight: PropTypes.string.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
}

export default GameBoard;