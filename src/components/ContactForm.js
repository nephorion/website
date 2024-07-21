import React, { useState } from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { trackButtonClick } from '../utils/analytics';


const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            trackButtonClick('website', 'ContactForm', 'send');
            await axios.post('https://api.nephorion.com/website/contact', formData);
            navigate("/");
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleCancel = async () => {
        trackButtonClick('website', 'ContactForm', 'cancel');
        navigate("/");
    };


    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Row>
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
                </Row>
                <Row>&nbsp;</Row>

                <Row>
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
                <Row>&nbsp;</Row>

                <Row>
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
                <Row>&nbsp;</Row>

                <Row>
                    <Col>
                        <Form.Group as={Col} controlId="formInputs">
                            <Button  size="sm" variant="outline-secondary" style={{"float":"left"}} onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group as={Col} controlId="formInputs">
                            <Button  size="sm" variant="outline-primary" style={{"float":"right"}} type="submit">
                                Send
                            </Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

export default ContactForm;
