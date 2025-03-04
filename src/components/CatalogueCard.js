import {Button, Card} from "react-bootstrap";
import React from "react";

const CatalogueCard = ({
    title,
    sub_title,
    text,
    cta

}) => {

    return (
        <Card bg="dark" text="light">
            <Card.Body>
                <Card.Title className="text-light">{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-secondary">{sub_title}</Card.Subtitle>
                <Card.Text> {text}
                </Card.Text>

                <Button style={{"float": "right"}} variant="outline-info">
                    {cta}
                </Button>

            </Card.Body>
        </Card>
    )
}

export default CatalogueCard;