import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ItemListContainer() {
  // Datos de ejemplo para los productos
  const products = [
    { id: 1, name: "Samsung Galaxy S21", image: "https://via.placeholder.com/300x200", price: 800 },
    { id: 2, name: "MacBook Pro 13", image: "https://via.placeholder.com/300x200", price: 1200 },
    { id: 3, name: "Sony PlayStation 5", image: "https://via.placeholder.com/300x200", price: 500 }
  ];

  return (
    <Container className="mt-4">
      <h1>Artículos en venta</h1>
      <p>En esta sección podrás encontrar todos nuestros productos disponibles.</p>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ItemListContainer;

