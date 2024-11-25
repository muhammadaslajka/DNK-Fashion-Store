import { Container, Button } from 'react-bootstrap';

const SpecialOffer = () => {
  return (
    <div
      className="special-offer text-center py-5"
      style={{
        background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJPtmNktrjbJINZ-v-dDvE7pMgOWo_gDNQLQ&s")',
        color: '#fff', // Add color for better visibility
        padding: '100px 0',
      }}
    >
      <Container>
        <h2>Special Edition</h2>
        <p>Buy This T-shirt At 20% Discount, Use Code OFF20</p>
        <Button variant="light">Shop Now</Button>
      </Container>
    </div>
  );
};

export default SpecialOffer;
