import { Col, Form, ProgressBar, Row } from "react-bootstrap";

function MessageForm() {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <ProgressBar variant="warning" label="60%" now={60} />
      <Row>
        <Col>
          <button className="message-form-button" style={{ width: "100%" }}>
            전송
          </button>
        </Col>
        <Col>
          <button className="message-form-button" style={{ width: "100%" }}>
            이미지
          </button>
        </Col>
      </Row>
    </div>
  );
}

export default MessageForm;
