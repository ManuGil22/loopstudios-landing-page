// Libraries
import React from 'react';

// Stylesheets
import '../Stylesheets/MainDescription.css';

// Images
import vrImage from '../images/desktop/image-interactive.jpg';

function MainDescription() {
    return(
        <div className='container'>
            <div className='image-container'>
                <img className='image' alt='vr-image' src={vrImage} />
            </div>
            <div className='absolute-container'>
            <div className='text-container'>
                <h2 className='text-title'>THE LEADER IN INTERACTIVE VR</h2>
                <p className='text-description'>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around 
                the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
            </div>
            </div>
        </div>
    );
}

export default MainDescription;