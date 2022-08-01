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

import deepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "../images/mobile/image-soccer-team.jpg";
import carGridMobile from "../images/mobile/image-grid.jpg";
import fromAboveMobile from "../images/mobile/image-from-above.jpg";
import pocketBorealisMobile from "../images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "../images/mobile/image-curiosity.jpg";
import fisheyeMobile from "../images/mobile/image-fisheye.jpg";

function CreationsSection(){

    function itsMobile() {
        if (window.matchMedia("(max-width: 960px)").matches) {
            return true;
        }
        return false;
    }

    return(
        <div className='creations-container'>
            <div className='creations-header-container'>
                <h2 className='creations-title'>OUR CREATIONS</h2>
                <button className={itsMobile() ? 'button hidden' : 'button' }>SEE ALL</button>
            </div>
            <div className='grid-container'>
                <CreationCard imgSrc={itsMobile() ? deepEarthMobile : deepEarth} fstLvlTitle="DEEP" sndLvlTitle="EARTH" />
                <CreationCard imgSrc={itsMobile() ? nightArcadeMobile : nightArcade} fstLvlTitle="NIGHT" sndLvlTitle="ARCADE" />
                <CreationCard imgSrc={itsMobile() ? soccerTeamMobile : soccerTeam} fstLvlTitle="SOCCER" sndLvlTitle="TEAM VR" />
                <CreationCard imgSrc={itsMobile() ? carGridMobile : carGrid} fstLvlTitle="THE" sndLvlTitle="GRID" />
                <CreationCard imgSrc={itsMobile() ? fromAboveMobile : fromAbove} fstLvlTitle="FROM UP" sndLvlTitle="ABOVE VR" />
                <CreationCard imgSrc={itsMobile() ? pocketBorealisMobile : pocketBorealis} fstLvlTitle="POCKET" sndLvlTitle="BOREALIS" />
                <CreationCard imgSrc={itsMobile() ? curiosityMobile : curiosity} fstLvlTitle="THE" sndLvlTitle="CURIOSITY" />
                <CreationCard imgSrc={itsMobile() ? fisheyeMobile : fisheye} fstLvlTitle="MAKE IT" sndLvlTitle="FISHEYE" />
            </div>
            <div className='creations-header-container'>
                <button className={!itsMobile() ? 'button hidden' : 'button' }>SEE ALL</button>
            </div>
        </div>
    );
}

export default CreationsSection;