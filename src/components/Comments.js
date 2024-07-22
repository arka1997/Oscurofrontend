import React, { useState } from 'react'
import "./Comments.css"
import {FaHeart} from "react-icons/fa"
import { FaReply } from "react-icons/fa"
import {FaEdit} from "react-icons/fa"
import {FaTrash} from "react-icons/fa"
import { IconBtn } from './IconBtn'


const Comments = ({ id, userName, rootMessage, timestamp }) => {
  // const {getReplies} = "dfdf"
  // const childComments = getReplies(id) // here we pass the id of the current root comment to get its child comments
  const [areChildrenHidden, setAreChildrenHidden] = useState(false)
  const currentDate = new Date(timestamp);
  const currentDateISOString = currentDate.toISOString();

  return (
    <>
      {/* This first one is the Parent comment with header footer, and after that, we print its child comments */}
      {/* Create Comment Header */}
      <div className="comment">
          <div className="header">
            {/* Also add user IMAGE along with name in comments */}
            <span className="name">{userName}</span>
            <span className="id">{id}</span>
            <span className="date">{currentDateISOString}</span>
          </div>
          {/* Create Comment Message Body */}
          <div className="message">{rootMessage}</div>
          
          {/* Create Comment Footer */}
          <div className="footer">
            <IconBtn Icon={FaHeart}>
              2
            </IconBtn>
            <IconBtn Icon={FaReply}>
              2
            </IconBtn>
            <IconBtn Icon={FaEdit}>
              2
            </IconBtn>
            <IconBtn Icon={FaTrash} colour="red">
              2
            </IconBtn>
          </div>
      </div>
     
    </>
    
    /* Now Comment Form will be present in 2 places, one is just below post when I click Comment Btn.
    The other time is when we want to update the Comment(Parent or Child) */
  )
}

export default Comments