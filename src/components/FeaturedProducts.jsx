
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  { name: 'DNK Yellow Shoes', price: '$120.00', image: 'https://rairang.com/wp-content/uploads/2021/03/sports-shoe3.jpg' },
  { name: 'DNK Blue Shoes', price: '$240.00', image: 'https://triverse.co.in/wp-content/uploads/2021/03/sports-shoe1.jpg' },
  { name: 'Dark Brown Jeans', price: '$150.00', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTgvwc35wtsdDV_JKJgY5VpN-wqmlh7ClefHF4GzJR6lvuzBNfi' },
  { name: 'Blue Denim Jeans', price: '$150.00', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf4U4s0qI1x8Fv_1W4RBCA0GNiCMzGufs6jACY2QVxmR3rPdj9' },
  { name: 'Basic Gray Jeans', price: '$150.00', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQTfjyQkdpFmbbI7jo7der9QCoPDr1RkPfGc9GsDx5VbWWS1aEn' },
];

const FeaturedProducts = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center">Featured Products</h2>
      <Row>
        {products.map((product, index) => (
          <Col md={4} key={index}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="dark">Shop Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedProducts;
