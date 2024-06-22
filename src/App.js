import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import ContactForm from './components/ContactForm';
import About from "./components/About";

function App() {
    return (
        <Container className="mt-5">
            <div className="animated-background"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactForm />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Container>
    );
}

export default App;
