import React, { memo } from "react";

const CartItem = memo(({ item, addProduct, deleteProduct }) => {
  return (
    <div className="button-div-CheckOut">
      <p>
        {item.title} (Кол-во: {item.count})
      </p>
      <button className="button-CheckOut" onClick={() => addProduct(item.id)}>
        +1
      </button>
      <button
        className="button-CheckOut"
        onClick={() => deleteProduct(item.id)}
      >
        Удалить
      </button>
    </div>
  );
});

export default CartItem;
