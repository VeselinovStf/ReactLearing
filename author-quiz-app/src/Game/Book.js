import React from 'react';

function Book({title, onClick}){
    return(
        <h4 className="answer" onClick={() => onClick(title)} >{title}</h4>
    )
}

export default Book;