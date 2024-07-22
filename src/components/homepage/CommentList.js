import React from 'react';
import Comments from '../../components/Comments';

const CommentList = ({ comments }) => {
  return (
    <>
      {comments.map(comment => (
        <div key={comment._id} className="comment-stack">
          <Comments 
            {...comment}
          />
        </div>
      ))}
    </>
  );
};

export default CommentList;