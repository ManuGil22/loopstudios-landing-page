// Libraries
import React from 'react';

// Stylesheets
import '../Stylesheets/CreationCard.css';

function CreationCard({ imgSrc, fstLvlTitle, sndLvlTitle }){
    return(
        <div className='card-container'>
            <img src={imgSrc} className='card-img' alt='card' />
            <div className='card-title-container'>
                <h3 className='card-title'>{fstLvlTitle}</h3>
                <h3 className='card-title'>{sndLvlTitle}</h3>
            </div>
        </div>
    );
}

export default CreationCard;