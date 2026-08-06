import React, { memo, useContext } from "react";
import LanguageContext from "./LanguageContext";
const CartItem = memo(({ item, addProduct, deleteProduct }) => {
  const { dictionary, handleLanguage } = useContext(LanguageContext);

  return (
    <div className="button-div-CheckOut">
      <p>
        {dictionary.checkout[item.key]} ({dictionary.checkout.quantity}{" "}
        {item.count})
      </p>
      <button className="button-CheckOut" onClick={() => addProduct(item.id)}>
        +1
      </button>
      <button
        className="button-CheckOut"
        onClick={() => deleteProduct(item.id)}
      >
        {dictionary.checkout.removeItem}
      </button>
    </div>
  );
});

export default CartItem;
