import React, { useState } from 'react';
import axios from 'axios';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Tooltip from '@material-ui/core/Tooltip';
import { useSelector } from 'react-redux';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';

const Post = () => {
  // Fetch posts from Redux store
  const posts = useSelector(state => state.posts);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  
  const getRandomColor = () => {
    const colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorCode;
  };

  // Initialize likes state for each post
  const [likes, setLikes] = useState({});

  // Function to handle adding likes
  const addLike = async (postId) => {
    try {
      // Toggle like state for the current post
      setLikes(prevLikes => ({
        ...prevLikes,
        [postId]: !prevLikes[postId]
      }));
      
      // Send request to update likes in the database
      await updateLikes(postId, likes[postId] ? 0 : 1); // Sending 1 for like, 0 for unlike
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };

  // Function to send request to update likes in the database
  const updateLikes = async (postId, updtLike) => {
    try {
      const response = await axios.get(`http://localhost:4000/addLikes/${postId}/${updtLike}`);
      console.log(response);
    } catch (error) {
      console.error('Error updating likes:', error);
    }
  };

  // Function to handle adding comments
  const addComments = () => {
    // Implement functionality to add comments
  };

  return (
    <>
      {posts?.map((post) => (
        <div className='post' key={post.id}>
          {post.text?.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <div className='post__header'>
                <div className='post__headerAuthor'>
                  <Avatar style={{ marginRight: "10px" }} sx={{ bgcolor: getRandomColor() }}>
                  </Avatar>{" "}
                  {item.userName} • <span>{item.timestamp}</span>
                </div>
                
                <Tooltip title="Delete Post">
                  <div className='moreOptionsIcon' onClick={() => setShowDeletePopup(true)}>
                    <MoreHorizIcon />
                  </div>
                </Tooltip>
              </div>
              <div className='post__image'>
                <img
                  src={`http://localhost:4000/${item.postImage}`} // Dynamic image source
                  alt="Post"
                />
              </div>
              <div className='post__footer'>
                <div className='post__footerIcons'>
                  <div className='post__iconsMain'>
                    {likes[item._id] ? (
                      <FavoriteIcon className="fas postIcon" onClick={() => addLike(item._id)} />
                    ) : (
                      <FavoriteBorderIcon className="postIcon" onClick={() => addLike(item._id)} />
                    )}
                    <ChatOutlinedIcon className="postIcon" onClick={addComments}/>
                    <TelegramIcon className="postIcon" />
                  </div>
                  <div className='post__iconsSave'>
                    <BookmarkBorderIcon className="postIcon" />
                  </div>
                </div>
                Liked by {item.postLikes} people.
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default Post;
