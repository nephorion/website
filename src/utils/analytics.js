import ReactGA from 'react-ga4';

export const trackButtonClick = (category, action, label) => {
    ReactGA.event({
        category: category, // e.g., 'User'
        action: action, // e.g., 'Clicked Button'
        label: label // e.g., 'Signup Button'
    });
};
