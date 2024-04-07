import React, { useState } from 'react';
import "./Homepage.css";
import Sidenav from "../navigation/Sidenav"
import Timeline from "../timeline/Timeline"
import Dummy from '../dummy';
const Homepage = () => {

    return (
        <div className='homepage'>
            <div className="homepage__navWraper">
                <Sidenav />
            </div>
            <div className="homepage__timeline">
                <Timeline />
            </div>
            <Dummy/>
        </div>
    );
}

export default Homepage;