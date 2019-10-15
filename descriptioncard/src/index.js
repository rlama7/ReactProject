import React from "react";
import ReactDOM from "react-dom";
import {Container, Row, Col} from 'react-bootstrap';
import {Accordion, Button, Card} from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (

        <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Para 1
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Para 2
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
      


    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
