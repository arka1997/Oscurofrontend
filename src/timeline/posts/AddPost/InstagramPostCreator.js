import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Suggestions from '../../Suggestions';
import "./InstagramPostCreator.css";
import { getDates } from '../../../components/Dates';
import {useNavigate} from 'react-router-dom'

const InstagramPostCreator = () => {
    const navigate = useNavigate();

    const [postImage, setPostImage] = useState(null);
    const [formData, setFormData] = useState({
        postText: '',
        userName: 'Deba',
        postLikes: 0,
        timestamp: getDates(),
    });

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setPostImage(selectedImage);
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

            navigate("/");
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
        }
    };
    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h1>Create Instagram Post</h1>
                    <Form>
                        <Form.Group controlId="formImage">
                            <Form.Label>Choose Image:</Form.Label>
                            <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
                        </Form.Group>
                         <Form.Group controlId="formMessage">
                            <Form.Label>Message:</Form.Label>
                            <Form.Control as="textarea" rows={3} name="postText" value={formData.postText} onChange={handlePostDetails} />
                        </Form.Group>
                        <Form.Group controlId="formUserName">
                            <Form.Label>UserName:</Form.Label>
                            <Form.Control type="text" name="userName" value={formData.userName} onChange={handlePostDetails} />
                        </Form.Group>
                        <Button variant="primary" onClick={handlePostSubmit}>Create Post</Button>
                    </Form>
                </Col>
            </Row>
        <Suggestions/>
        </Container>
    );
};

export default InstagramPostCreator;
