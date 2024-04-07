import React, { useState } from 'react';
import './ModalWrapper.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { getDates } from '../../../components/Dates';
import { Modal} from 'react-bootstrap';

const ModalWrapper = ({ showModal, handleCloseModal }) => {
    const navigate = useNavigate();
    
  const [image, setImage] = useState(null);
    const [postImage, setPostImage] = useState(null);
    const [formData, setFormData] = useState({
        postText: '',
        userName: 'Deba',
        postLikes: 0,
        timestamp: getDates(),
    });
    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        const reader = new FileReader();
    reader.onloadend = () => {
        setPostImage(selectedImage);
        setImage(reader.result);
    };
    if (selectedImage) {
      reader.readAsDataURL(selectedImage);
    }
    };

  const handlePostDetails = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
        // Benifits of FormData is apart from sending String, Numbers,etc, we can also send Files that were uploaded, directly to server. It is not possible if we send it normally
        const formDataToSend = new FormData();
        formDataToSend.append('postImage', postImage);
        formDataToSend.append('postText', formData.postText);
        formDataToSend.append('userName', formData.userName);
        formDataToSend.append('postLikes', formData.postLikes);
        formDataToSend.append('timestamp', formData.timestamp);

        const response = await axios.post("http://localhost:4000/addPost", formDataToSend);
        console.log("Post created successfully!");

    } catch (error) {
        console.error('Failed to send post:', error.message);
    } finally {
        // Reset form
        setPostImage(null);
        setFormData({
            postText: '',
            userName: 'Deba',
            postLikes: 0,
            timestamp: getDates(),
        });
        
        // navigate("/");?? Need to activate this later
        handleCloseModal();
    }
};

  return (
    <Modal show={showModal} onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
            <Modal.Title>Create Instagram Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handlePostSubmit} className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">UserName</h2>
            <div className="flex flex-col items-center space-y-4">
                    <input
                        type="text"
                        name="userName" 
                        readOnly={true}
                        value={formData.userName}
                        onChange={handlePostDetails} 
                        className="w-full h-20 p-4 border border-gray-200 rounded-md resize-none focus:outline-none focus:border-blue-400"
                    ></input>
                    <div className="w-full flex justify-center items-center relative">
                        {image ? (
                            <img src={image} alt="Preview" className="w-full h-auto rounded-md" />
                        ) : (
                            <div className="bg-gray-100 w-full h-40 flex justify-center items-center text-gray-400 rounded-md">
                            <span className="text-xs">No image selected</span>
                            </div>
                        )}
                        <input type="file" accept="image/*" onChange={handleImageChange} className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                    <textarea
                        name="postText"
                        placeholder="Write your caption here..."
                        onChange={handlePostDetails} 
                        className="w-full h-20 p-4 border border-gray-200 rounded-md resize-none focus:outline-none focus:border-blue-400"
                    ></textarea>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300">Create Post</button>
            </div>
      </form>
      </Modal.Body>
      <Modal.Footer>
        
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWrapper;
