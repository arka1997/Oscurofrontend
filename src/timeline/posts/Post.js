import React, {useState} from 'react';
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

  const getRandomColor = () => {
    const colorCode = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return colorCode;
  };

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const [isActive, setIsActive] = useState(true);

  const addLike = async (postId) => {
    Likes(postId, 1)
    // Here set the Active to true, for only those post, which has been clicked.
    setIsActive(!isActive);//SET TO ACTIVE, ONLY IF, THE DATA EXIST IN db, AND THE LIKE IS UPDATED TO +1
    
  };
  const removeLike = async (postId) => {
    Likes(postId, 0)
    setIsActive(!isActive);//SET TO ACTIVE, ONLY IF, THE DATA EXIST IN db, AND THE LIKE IS UPDATED TO +1
    
  };
const Likes = async (postId,updtLike) => {
  try{
    const response = await axios.get(`http://localhost:4000/addLikes/${postId}/${updtLike}`);
    console.log(response);
  }catch(err){
    console.error('Error adding like:', err);
  }
}

  const addComments = () => {

  }

  return (
    <>

    {/**** Problem is simple, when you are uodating the Like button to red colour,
     you are not specifying for a particular post, so when we set true, all the
      other posts Love button also gets triggered and turned to red. So now, 
      while clicking on Like button, we should try to differentiate with the Post ids */}
      {posts?.map((post) => (
        
        <div className='post' key={post.id}>

          {post.text?.map((item, index) => (
            <div key={`${item.id}-${index}`}>

            {/* {console.log(item._id)} */}
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
                  
                  
                    {isActive?(
                      <FavoriteBorderIcon key={item._id} className="postIcon" onClick={() => addLike(item._id)} />
                    ):(
                      <FavoriteIcon key={item._id} className="fas postIcon" onClick={() => removeLike(item._id)} />
                    )}
                    {/* <ModeCommentOutlinedIcon className="postIcon"/> */}
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
