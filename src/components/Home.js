import React, {useState} from 'react';
import Heading from './Heading';
import {Button, Card, Col, Container, Modal, Row} from "react-bootstrap";
import ContactForm from "./ContactForm";
import About from "./About";
import InfoCard from "./InfoCard";

const Home = () => {
    const [showContactModal, setShowContactModal] = useState(false);
    const [showAboutModal, setShowAboutModal] = useState(false);

    const handleClose = (f, message) => {
        if(message!=null) {
            //alert(message)
        }
        f(false);
    }
    const handleShow = (f) => f(true);

    return (
        <Container>
            <Row>
                <Col sm className="text-center">
                    <Heading/>
                </Col>
            </Row>




            <About handleClose={handleClose}/>
            <ContactForm handleClose={handleClose}/>
        </Container>
    );
}

export default Home;
