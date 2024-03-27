import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Suggestions from './timeline/Suggestions';
import "./InstagramPostCreator.css"
const InstagramPostCreator = () => {
    const [image, setImage] = useState(null);
    const [message, setMessage] = useState('');

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const handlePostSubmit = () => {
        // Logic to handle post submission, e.g., upload image and message to server
        console.log('Image:', image);
        console.log('Message:', message);
        // Reset form
        setImage(null);
        setMessage('');
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
                            <Form.Control as="textarea" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} />
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
