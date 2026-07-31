import React, { memo } from "react";
import CartItem from "./CartItem.jsx";
import "./Style.css";

const Checkout = memo(({ cart, addProduct, deleteProduct, clearCheckout }) => {
  return (
    <div className="main-div-Checkout">
      <h4>Корзина Товаров</h4>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
        />
      ))}

      <button onClick={clearCheckout}>Очистить корзину</button>
    </div>
  );
});

export default Checkout;
