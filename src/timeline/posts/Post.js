import React from 'react'
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const Post = ({ user, postImage, likes, timestamp }) => {
  const getRandomColor = () => {
    const colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorCode;
  };
  return (
      <div className='post'>
        <div className='post__header'>
            <div className='post__headerAuthor'>
                <Avatar style={{ marginRight: "10px" }} sx={{ bgcolor: getRandomColor() }}>
                  <img    
                    src="../../../img/logo2.png"
                    alt="Instagram Logo"
                    style={{ width: "100%" }}
                  />
                </Avatar>{" "}
                {user} • <span>{timestamp}</span>
            </div>
          <MoreHorizIcon />
        </div>

        <div className='post__image'>
            {postImage}
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
            Liked by {likes} people.
        </div>

    </div>
  );
};

export default Post;
