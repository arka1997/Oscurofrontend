import React, {useState} from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';

const Post = () => {
  const getRandomColor = () => {
    const colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorCode;
  };

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    // Logic to delete the post
    setShowDeletePopup(false); // Close the popup after deleting the post
  };
  // Fetch posts from Redux store
  const posts = useSelector(state => state.posts);

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

              {/* Render post image dynamically */}
              <div className='post__image'>
                <img
                  src={`http://localhost:4000/${item.postImage}`} // Dynamic image source
                  alt="Post"
                />
              </div>
              <div className='post__footer'>
                <div className='post__footerIcons'>
                  <div className='post__iconsMain'>
                    <FavoriteBorderIcon className="postIcon" />
                    <ChatBubbleOutlineIcon className="postIcon" />
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
