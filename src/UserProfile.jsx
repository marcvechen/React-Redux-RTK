import React, { memo } from "react";
import "./Style.css";
const Profile = memo(({ user, changeName, getAge, changeActive }) => {
  return (
    <div className="main-div">
      <h4>Профиль пользователя</h4>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активен: {user.isActive ? "Да" : "Нет"}</p>
      <div className="button-div-userProfile">
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={getAge}>Увеличить возраст</button>
        <button onClick={changeActive}>Переключить активность</button>
      </div>
    </div>
  );
});
export default Profile;
