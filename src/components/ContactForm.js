import React, { useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({handleClose}) => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //await axios.post('https://your-api-endpoint.com/submit', formData);
            handleClose("We will be in contact soon!");
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleCancel = async (e) => {
        handleClose();
    };


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formName">
                    <Form.Control
                        size="sm"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={"name"}
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formEmail">
                    <Form.Control
                        size="sm"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={"email"}
                        required
                    />
                </Form.Group>
                </Row>

                <Row className="mb-3">

                    <Form.Group as={Col} controlId="formMessage">
                    <Form.Control
                        size="sm"
                        as="textarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={"message"}
                        required
                        rows={4}
                    />
                </Form.Group>
                </Row>

                <Row className="mb-2">
                    <Form.Group as={Col} controlId="formInputs">
                        <Button  size="sm" variant="outline-secondary" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formInputs">
                        <Button  size="sm" variant="outline-primary" style={{"float":"right"}} type="submit">
                            Send
                        </Button>
                    </Form.Group>
                </Row>
            </Form>
        </>
    );
};

export default ContactForm;
