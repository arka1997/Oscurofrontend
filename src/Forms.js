import React, { useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';

// import { addPost } from '../features/timeline/timelineSlice';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    postImage: '',
    postText: '',
    userName: '',
    postLikes: 0,
    timestamp: ''
  });

  const [typeSuccess, setTypeSuccess] = useState(null);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/addDemoPost", formData);
    console.log(response)
    if(response.status){
      setTypeSuccess('Data uploaded successfully!');
      console.info('sUCCESS')
    } else {
      console.error('Failed to Send.');
    }
  
    // Dispatch action to add post with form data
    // dispatch(addPost(formData));
    // Reset form data
    // setFormData({
    //   postImage: '',
    //   postText: '',
    //   userName: '',
    //   postLikes: 0,
    //   timestamp: ''
    // });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,//This is needed because, we are keeping a copy of the previous state, so that when we make a change in 1st field only, and don't touch the rest data, then we get only the updated field, rest of the fields are sent empty. Because, other fields were not stored or copied any where to store previous states.
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="postImage" value={formData.postImage} onChange={handleChange} placeholder="Post Image URL" />
      <input type="text" name="postText" value={formData.postText} onChange={handleChange} placeholder="Text" />
      <input type="text" name="userName" value={formData.userName} onChange={handleChange} placeholder="User" />
      <input type="number" name="postLikes" value={formData.postLikes} onChange={handleChange} placeholder="Likes" />
      <input type="text" name="timestamp" value={formData.timestamp} onChange={handleChange} placeholder="Timestamp" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
