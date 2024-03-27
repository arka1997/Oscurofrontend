import {React, useState} from 'react';
import "./Timeline.css";
import Suggestions from '../timeline/Suggestions';
import Post from './posts/Post';
const Timeline = ({}) => {
  const [posts, setPosts] = useState([
    {
      user: "redian_",
      postImage:
      <img
      src="../../../img/camera.jpg"
      alt="Instagram Logo"
    />,
      likes: 54,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        <img
        src="../../../img/camera.jpg"
        alt="Instagram Logo"
      />,
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        <img
        src="../../../img/camera.jpg"
        alt="Instagram Logo"
      />,
      likes: 14,
      timestamp: "2d",
    },
    {
      user: "kobee_18",
      postImage:
        <img
        src="../../../img/camera.jpg"
        alt="Instagram Logo"
      />,
      likes: 14,
      timestamp: "2d",
    },
  ]);
  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__posts'>
              {posts.map((post) => (
                <Post 
                user={post.user}
                postImage={post.postImage} 
                likes={post.likes} 
                timestamp={post.timestamp}
                />
              ))}
            </div>
        </div>
        <div className='timeline__right'>
            <Suggestions/>
        </div>
    </div>
  )
}
export default Timeline;
