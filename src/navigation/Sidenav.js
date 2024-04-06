import React from 'react';
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from 'react-router-dom';

const Sidenav = () => {
    
  return (
    <div className='sidenav'>
        <div className='sidenav__logo'></div>
        
        <div className='sidenav__buttons'>
            <Link to="/" className='sidenav__button'>
              <HomeIcon />
              <span>Home</span>
            </Link>
            <Link to="/search" className='sidenav__button'>
              <SearchIcon />
              <span>Search</span>
            </Link>
            <Link to="/explore" className='sidenav__button'>
              <ExploreIcon />
              <span>Explore</span>
            </Link>
            <Link to="/reels" className='sidenav__button'>
              <SlideshowIcon />
              <span>Reels</span>
            </Link>
            <Link to="/messages" className='sidenav__button'>
              <ChatIcon />
              <span>Messages</span>
            </Link>
            <Link to="/notifications" className='sidenav__button'>
              <FavoriteBorderIcon />
              <span>Notifications</span>
            </Link>
            <Link to="/modalWrapper" className='sidenav__button'>
              <AddCircleOutlineIcon />
              <span>Create</span>
            </Link>
        </div>
        <div className='sidenav__more'>
            <button className='sidenav__button'>
              <MenuIcon />
              <span>More</span>
            </button>
        </div>
    </div>
  );
}

export default Sidenav;
