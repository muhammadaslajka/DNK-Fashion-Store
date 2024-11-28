import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const PromoBanner = () => {
  return (
    <Container className="my-4">
      <Row className="text-center">
        <Col md={4}>
          <Card
            className="text-white"
            style={{
              backgroundImage: `url('data:image/jpeg;base64,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')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Body>
              <Card.Title className="fs-4 fw-bold">20% Off On Tank Tops</Card.Title>
              <Card.Text className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
              </Card.Text>
              <Button variant="light" className="fw-bold">
                Shop Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card
            className="text-white"
            style={{
              backgroundImage: `url('data:image/jpeg;base64,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')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Body>
              <Card.Title className="fs-4 fw-bold">Latest Eyewear For You</Card.Title>
              <Card.Text className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
              </Card.Text>
              <Button variant="light" className="fw-bold">
                Shop Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card
            className="text-white"
            style={{
              backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFJg5hoV_9sOX06iYG64h4NQxEh43vrYwAA&s')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: '400px',
              borderRadius: '10px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card.Body>
              <Card.Title className="fs-4 fw-bold">Lets Lorem suit Up</Card.Title>
              <Card.Text className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac dictum.
              </Card.Text>
              <Button variant="light" className="fw-bold">
                Shop Now
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PromoBanner;