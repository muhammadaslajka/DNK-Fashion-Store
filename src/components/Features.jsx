import { Container, Row, Col } from 'react-bootstrap';
import { FaGlobe, FaTshirt, FaTag, FaLock } from 'react-icons/fa';

const Features = () => {
  return (
    <Container className="my-5 text-center">
      <Row>
        <Col md={3}>
          <FaGlobe size={40} color="#0acef5" />
          <h5>Worldwide Shipping</h5>
        </Col>
        <Col md={3}>
          <FaTshirt size={40} color="#b803ff" />
          <h5>Best Quality</h5>
        </Col>
        <Col md={3}>
          <FaTag size={40} color="#ff0703" />
          <h5>Best Offers</h5>
        </Col>
        <Col md={3}>
          <FaLock size={40} color="#007bff" />
          <h5>Secure Payments</h5>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;