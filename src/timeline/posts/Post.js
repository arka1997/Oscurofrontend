import React from 'react';
import "./Post.css";
import Avatar from '@mui/material/Avatar';
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useSelector } from 'react-redux';

const Post = () => {
  const getRandomColor = () => {
    const colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorCode;
  };

  // Fetch posts from Redux store
  const posts = useSelector(state => state.posts);

  return (
    <>
      {posts && posts.map((post) => (
        <div key={post.id} className='post'>
          {post.text?.map((item) => (
            <div key={item.id}>
              <div className='post__header'>
                <div className='post__headerAuthor'>
                  <Avatar style={{ marginRight: "10px" }} sx={{ bgcolor: getRandomColor() }}>
                  </Avatar>{" "}
                  {item.userName} • <span>{item.timestamp}</span>
                </div>
                <MoreHorizIcon />
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
