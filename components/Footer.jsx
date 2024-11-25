import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>DNK</h5>
            <p>The best look anytime, anywhere.</p>
          </Col>
          <Col md={6} className="text-end">
            <p>© 2024 Brandstore. Powered by Brandstore.</p>
          </Col>
        </Row>
        
        {/* Centered Subscribe Section */}
        <Row className="justify-content-center mt-3">
          <Col xs="auto" className="d-flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="subscribe-input"
            />
            <button className="subscribe-button">Subscribe</button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
