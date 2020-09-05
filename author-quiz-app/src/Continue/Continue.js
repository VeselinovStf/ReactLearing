import React from 'react';

function Continue ({show, onContinue}){
    
        return(

            
            <div>
                {show ? <button type='submit' className="btn btn-info">Continue</button>
                : null}
            </div>
        )
    
};

export default Continue;