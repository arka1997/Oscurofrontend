import React, { useState } from 'react';
import "./Homepage.css";
import InstagramPostCreator from '../InstagramPostCreator';
import Sidenav from "../navigation/Sidenav"
import Timeline from "../timeline/Timeline"
const Homepage = () => {
    const [isInstagramPostCreatorOpen, setIsInstagramPostCreatorOpen] = useState(false);

    const handleToggleInstagramPostCreator  = () => {
        setIsInstagramPostCreatorOpen(!isInstagramPostCreatorOpen);
    };
    return (
        <div className='homepage'>
            <div className="homepage__navWraper">
                <Sidenav postCreator={handleToggleInstagramPostCreator} />
            </div>
            <div className="homepage__timeline">
            {isInstagramPostCreatorOpen === true?(
                <Timeline />):(
                <InstagramPostCreator />)}
            </div>
        </div>
    );
}

export default Homepage;