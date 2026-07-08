import React, { useState } from "react";
function User() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  return (
    <div>
      <button onClick={() => setUser((prevName) => prevName)}>
        Сменить имя
      </button>
      <button onClick={() => setUser((preAage) => prevAge + 1)}>
        Увеличить возраст
      </button>
      <button
        onClick={() =>
          setUser((prevActive) => (prevActive === true ? false : true))
        }
      >
        Переключить активность
      </button>
    </div>
  );
}
