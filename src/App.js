import React, {useEffect} from 'react';
import {Route, Routes, useLocation} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactGA from 'react-ga4';
import HomePage from './pages/HomePage';

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }, [location]);
};

function App() {
    usePageTracking();

    return (
        <Container className="mt-5">
            <div className="animated-background"></div>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Container>
    );
}

export default App;
