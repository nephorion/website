import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";

function App() {
    return (
        <Container className="mt-5">
            <div className="animated-background"></div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </Container>
    );
}

export default App;
