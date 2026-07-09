import React, { useState } from "react";
import "./Style.css";
function Checkout() {
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);

  return (
    <div className="main-div-Checkout">
      <h4>Корзина Товаров</h4>
      {cart.map((item) => (
        <div className="button-div-CheckOut" key={item.id}>
          <p>
            {item.title} (Кол-во: {item.count})
          </p>
          <button
            className="button-CheckOut"
            onClick={() =>
              setCart((prevCart) =>
                prevCart.map((product) =>
                  product.id == item.id
                    ? { ...product, count: product.count + 1 }
                    : product,
                ),
              )
            }
          >
            +1
          </button>
          <button
            className="button-CheckOut"
            onClick={() =>
              setCart((prevCart) =>
                prevCart.filter((product) => product.id !== item.id),
              )
            }
          >
            Удалить
          </button>
        </div>
      ))}

      <button onClick={() => setCart(() => [])}>Очистить корзину</button>
    </div>
  );
}
export default Checkout;
