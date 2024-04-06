import React, { useState } from 'react';
import "./Homepage.css";
import InstagramPostCreator from '../timeline/posts/AddPost/InstagramPostCreator';
import Sidenav from "../navigation/Sidenav"
import Timeline from "../timeline/Timeline"
const Homepage = () => {

    return (
        <div className='homepage'>
            <div className="homepage__navWraper">
                <Sidenav />
            </div>
            <div className="homepage__timeline">
                <Timeline />
            </div>
        </div>
    );
}

export default Homepage;