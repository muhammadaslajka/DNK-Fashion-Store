import { Container, Button } from 'react-bootstrap';

const HeroSection = () => {
  return (
    <div className="hero-section text-center text-white py-5" style={{ background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKLPWbPjze5iYk8_ot89eEMWP5QDGGfv_Rg&s") no-repeat center/cover' }}>
      <Container>
        <h1>Raining Offers For Hot Summer!</h1>
        <p>25% Off On All Products</p>
        <Button variant="light" className="me-2">Shop Now</Button>
        <Button variant="outline-light">Find More</Button>
      </Container>
    </div>
  );
};

export default HeroSection;