import React from "react";
import { Accordion, Button, Card, Image } from "react-bootstrap";

const DescriptionCard = () => {
  return (
    <div>
      <p>Recommended To:</p>
      <div>
      <span><Image src="images/heart.jpg" alt="heart" roundedCircle/></span>
        <h4>Address gaps in your nutrition</h4>
      </div>
      <Accordion>
        <Card>
          <Card.Header>
            because your Healtcare Professional is concerned about your weight
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <span>+</span> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Para 00: Weight Concern --> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam similique reprehenderit quidem recusandae
              veniam sit modi sint voluptate excepturi tempora. Alias
              perferendis saepe laudantium itaque quia voluptas quibusdam.
              Dolorem, praesentium.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            because you eat a vegan diet
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <span>+</span> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Para 01: Vegan Diet --> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam similique reprehenderit quidem recusandae
              veniam sit modi sint voluptate excepturi tempora. Alias
              perferendis saepe laudantium itaque quia voluptas quibusdam.
              Dolorem, praesentium.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            because you don't eat enough fruit each day
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
            <span>+</span> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              Para 02: Fruit --> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam similique reprehenderit quidem recusandae
              veniam sit modi sint voluptate excepturi tempora. Alias
              perferendis saepe laudantium itaque quia voluptas quibusdam.
              Dolorem, praesentium.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            because you don't eat enough vegetables each day
            <Accordion.Toggle as={Button} variant="link" eventKey="3">
            <span>+</span> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              Para 03: Vegetables --> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam similique reprehenderit quidem recusandae
              veniam sit modi sint voluptate excepturi tempora. Alias
              perferendis saepe laudantium itaque quia voluptas quibusdam.
              Dolorem, praesentium.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            because you don't eat enough dairy each day
            <Accordion.Toggle as={Button} variant="link" eventKey="4">
            <span>+</span> 
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="4">
            <Card.Body>
              Para 04: Dairy --> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam similique reprehenderit quidem recusandae
              veniam sit modi sint voluptate excepturi tempora. Alias
              perferendis saepe laudantium itaque quia voluptas quibusdam.
              Dolorem, praesentium.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default DescriptionCard;
