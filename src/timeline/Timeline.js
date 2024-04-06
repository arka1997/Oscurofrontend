import {React, useEffect, useState} from 'react';
import axios from 'axios'
import "./Timeline.css";
import Suggestions from '../timeline/Suggestions';
import Post from './posts/Post';
import { useDispatch } from 'react-redux';
import { timelinePosts } from '../features/timeline/timelineSlice';
const Timeline = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/fetchPosts");
        // Filter and sanitize the data
        const sanitizedPosts = response.data.map(post => {
          // Example: Remove 'uploads\' from the beginning of postImage URL
          const sanitizedPostImage = post.postImage.startsWith('uploads\\') ? post.postImage.substring(8) : post.postImage;
          
  
          return {
            ...post,
            postImage: sanitizedPostImage
            // Add more sanitization or modifications as needed
          };
        });
  
        // Set the filtered and sanitized data in the state
        setPosts(sanitizedPosts);
  
        console.log("Filtered and sanitized posts:", sanitizedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    fetchPosts();
  }, []);


  const dispatch = useDispatch()
  dispatch(timelinePosts(posts))
  
  return (
    <div className='timeline'>
        <div className='timeline__left'>
            <div className='timeline__posts'>
                <Post/>
            </div>
        </div>
        <div className='timeline__right'>
            <Suggestions/>
        </div>
    </div>
  )
}
export default Timeline;
