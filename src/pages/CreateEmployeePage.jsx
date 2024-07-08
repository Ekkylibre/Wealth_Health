import { Button, Alert, Container, Row, Col } from 'react-bootstrap';

function CreateEmployeePage() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <Alert variant="success">
            This is a success alert—check it out!
          </Alert>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="primary">Primary Button</Button>
        </Col>
        <Col>
          <Button variant="secondary">Secondary Button</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateEmployeePage