import React from 'react';


const Card = ({ name, email, id }) => {

    return ( 
        <div className = 'bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5' >
            <img alt = 'robots'
            src = { `https://robohash.org/${id}?size=300x300` }/> 
        <div>
            <h2 > { name } </h2> 
            <p> { email } </p>         
        </div> 
        </div>
    );
}

export default Card;