// Libraries 
import React from 'react';

// Stylesheets
import '../Stylesheets/CreationsSection.css';

// Components
import CreationCard from './CreationCard';

// Images
import deepEarth from "../images/desktop/image-deep-earth.jpg";
import nightArcade from "../images/desktop/image-night-arcade.jpg";
import soccerTeam from "../images/desktop/image-soccer-team.jpg";
import carGrid from "../images/desktop/image-grid.jpg";
import fromAbove from "../images/desktop/image-from-above.jpg";
import pocketBorealis from "../images/desktop/image-pocket-borealis.jpg";
import curiosity from "../images/desktop/image-curiosity.jpg";
import fisheye from "../images/desktop/image-fisheye.jpg";

function CreationsSection(){
    return(
        <div className='creations-container'>
            <div className='creations-header-container'>
                <h2 className='creations-title'>OUR CREATIONS</h2>
                <button className='button'>SEE ALL</button>
            </div>
            <div className='grid-container'>
                <CreationCard imgSrc={deepEarth} fstLvlTitle="DEEP" sndLvlTitle="EARTH" />
                <CreationCard imgSrc={nightArcade} fstLvlTitle="NIGHT" sndLvlTitle="ARCADE" />
                <CreationCard imgSrc={soccerTeam} fstLvlTitle="SOCCER" sndLvlTitle="TEAM VR" />
                <CreationCard imgSrc={carGrid} fstLvlTitle="THE" sndLvlTitle="GRID" />
                <CreationCard imgSrc={fromAbove} fstLvlTitle="FROM UP" sndLvlTitle="ABOVE VR" />
                <CreationCard imgSrc={pocketBorealis} fstLvlTitle="POCKET" sndLvlTitle="BOREALIS" />
                <CreationCard imgSrc={curiosity} fstLvlTitle="THE" sndLvlTitle="CURIOSITY" />
                <CreationCard imgSrc={fisheye} fstLvlTitle="MAKE IT" sndLvlTitle="FISHEYE" />
            </div>
        </div>
    );
}

export default CreationsSection;