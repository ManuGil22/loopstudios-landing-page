// Libraries
import React from 'react';

// Components
import Header from './Header';

// Stylesheets
import '../Stylesheets/MainImage.css'


function MainImage(){
    return(
        <div className='main-container'>
            <div className='main'>
                <Header />
                <div className='main-title'>
                    <p className='main-title-text'>IMMERSIVE EXPERIENCES THAT DELIVER</p>
                </div>
            </div>
        </div>
    );
}

export default MainImage;