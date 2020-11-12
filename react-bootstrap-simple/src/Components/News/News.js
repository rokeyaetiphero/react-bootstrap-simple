import React from "react";
import {Card,Button} from 'react-bootstrap';

const News = () => {
  return (
    <div>
      <Card>
        <Card.Header as="h5">Featured</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Button variant="warning">Warning</Button>
    </div>
  );
};

export default News;
