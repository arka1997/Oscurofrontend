import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
const Post = () => {
  const [showDeletePopup, setShowDeletePopup] = useState(false);

  const handleDeleteClick = () => {
    // Logic to delete the post
    setShowDeletePopup(false); // Close the popup after deleting the post
  };

  return (
    <div className='post'>
      {/* Post content here */}

      {/* More options icon with tooltip */}
      <Tooltip title="Delete Post">
        <div className='moreOptionsIcon' onClick={() => setShowDeletePopup(true)}>
          <MoreHorizIcon />
        </div>
      </Tooltip>

      {/* Delete confirmation popup */}
      {showDeletePopup && (
        <div className="deletePopup">
          <p>Are you sure you want to delete this post?</p>
          <button onClick={handleDeleteClick}>Yes</button>
          <button onClick={() => setShowDeletePopup(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default Post;
