import React, { memo } from "react";
import CartItem from "./CartItem.jsx";
import "./Style.css";
import LanguageContext from "./LanguageContext";
import { useContext } from "react";
const Checkout = memo(({ cart, addProduct, deleteProduct, clearCheckout }) => {
  const { dictionary, handleLanguage } = useContext(LanguageContext);

  return (
    <div className="main-div-Checkout">
      <h4>{dictionary.checkout.checkout}</h4>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addProduct={addProduct}
          deleteProduct={deleteProduct}
        />
      ))}

      <button onClick={clearCheckout}>{dictionary.checkout.removeItem}</button>
    </div>
  );
});

export default Checkout;
