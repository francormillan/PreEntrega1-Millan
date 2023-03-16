import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  const itemCount = 0; // Aquí se debería implementar la lógica para contar la cantidad de productos en el carrito

  return (
    <div className="d-flex align-items-center">
      <FontAwesomeIcon icon={faShoppingCart} size="lg" />
      <span className="ml-2">{itemCount}</span>
    </div>
  );
}

export default CartWidget;
