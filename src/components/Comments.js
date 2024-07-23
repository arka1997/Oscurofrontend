import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./Comments.css";
import { FaEdit, FaHeart, FaRegHeart, FaReply, FaTrash } from "react-icons/fa";
import { IconBtn } from "./IconBtn";

const Comments = ({ _id, postId, rootMessage, userName, rootCommentLikes, timestamp }) => {
  // const {getReplies} = "dfdf"
  // const childComments = getReplies(id) // here we pass the id of the current root comment to get its child comments

  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(rootCommentLikes);
  const [areChildrenHidden, setAreChildrenHidden] = useState(false);
  const currentDate = new Date(timestamp);
  const currentDateISOString = currentDate.toISOString();
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   const fetchRootComments = async () => {
  //     try {
  //     for(const postsId of postId){
        
  //     }
  //       const response = await axios.get("http://localhost:4000/fetchRootComments", {
  //         params: {
  //           postId: postId // Add your parameter here
  //         }
  //       });
  //       response.data.map((data) => {
  //         console.log(data)
  //       })
  //       await setComments(response.data[0]);
  //     } catch (error) {
  //       console.error('Error fetching root comments:', error);
  //     }
  //   };

  //   fetchRootComments();
  // }, [_id]);

  // const addChildCommentLikes = async (rootCommentId, rootCommentLikes, isLiked) => {
  //   try {
  //     const updatedLikesCount = isLiked ? likesCount - 1 : likesCount + 1;
  //     const response = await axios.post(`http://localhost:4000/updateRootCommentLikes/${_id}/${updatedLikesCount}`);
            
  //         console.log(response.data)
  //     const updatedComments = comments.map(comment =>
  //       comment._id === rootCommentId
  //         ? { ...comment, isLiked: response.data.isLiked, rootCommentLikes: response.data.likes }
  //         : comment
  //     );
  //     setComments(updatedComments);
  //     setLikesCount(updatedLikesCount);
  //     setIsLiked(!isLiked);
  //   } catch (error) {
  //     console.error('Error updating root comment likes:', error);
  //   }
  // }
  


  const addChildCommentLikes = async () => {
    try {
      const likeStatus = isLiked ? 0 : 1;// depending on boolean value "isLiked", we set to either 0 or 1
      await axios.post(`http://localhost:4000/updateRootCommentLikes/${_id}/${likeStatus}`);
      setLikesCount((prevLikes) => prevLikes + (isLiked ? -1 : 1));
      setIsLiked(!isLiked);
    } catch (error) {
      console.error('Error updating comment likes:', error);
    }
  };
  return (
    <>
      {/* This first one is the Parent comment with header footer, and after that, we print its child comments */}
      {/* Create Comment Header */}

      <div className="comment">
        <div className="header">
          {/* Also add user IMAGE along with name in comments */}
          <span className="name">{userName}</span>
          <span className="id">{_id}</span>
          <span className="date">{currentDateISOString}</span>
        </div>

        {/* Create Comment Message Body */}
        <div className="message">{rootMessage}</div>

        {/* Create Comment Footer */}
        <div className="footer">
        <IconBtn Icon={isLiked ? FaHeart : FaRegHeart} onClick={addChildCommentLikes}>
          {likesCount}
        </IconBtn>
          <IconBtn Icon={FaReply}>2</IconBtn>
          <IconBtn Icon={FaEdit}></IconBtn>
          <IconBtn Icon={FaTrash} colour="red">
            2
          </IconBtn>
        </div>
      </div>
    </>

    /* Now Comment Form will be present in 2 places, one is just below post when I click Comment Btn.
    The other time is when we want to update the Comment(Parent or Child) */
  );
};

export default Comments;