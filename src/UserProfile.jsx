import React, { useState } from "react";
import "./Style.css";
function Profile() {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  return (
    <div className="main-div">
      <h4>Профиль пользователя</h4>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Да" : "Нет"}</p>
      <div className="button-div-userProfile">
        <button
          onClick={() => {
            const newName = prompt("Введіть нове ім'я:");
            if (newName) {
              setUser((prevUser) => ({ ...prevUser, name: newName }));
            }
          }}
        >
          Сменить имя
        </button>
        <button
          onClick={() =>
            setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }))
          }
        >
          Увеличить возраст
        </button>
        <button
          onClick={() =>
            setUser((prevUser) => ({
              ...prevUser,
              isActive: !prevUser.isActive ? true : false,
            }))
          }
        >
          Переключить активность
        </button>
      </div>
    </div>
  );
}
export default Profile;
