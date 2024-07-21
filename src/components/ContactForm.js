import React from 'react';
import {Button} from 'react-bootstrap';


const ContactForm = () => {

    return (
        <>
            <Button
                href="https://twitter.com/messages/compose?recipient_id=1814900427529592836"
                variant="dark"
                target="_blank"
                >
                DM us on X
            </Button>
        </>
    )
};

export default ContactForm;
