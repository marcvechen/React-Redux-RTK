import React, { memo, useContext } from "react";
import "./Style.css";
import LanguageContext from "./LanguageContext";
const Profile = memo(({ user, changeName, getAge, changeActive }) => {
  const { dictionary, handleLanguage } = useContext(LanguageContext);

  return (
    <div className="main-div">
      <h4>{dictionary.profile.profile}</h4>
      <p>
        {dictionary.profile.name}: {user.name}
      </p>
      <p>
        {dictionary.profile.age}: {user.age}
      </p>
      <p>
        {dictionary.profile.isActive}:{" "}
        {user.isActive
          ? dictionary.profile.isActiveYes
          : dictionary.profile.isActiveNo}
      </p>
      <div className="button-div-userProfile">
        <button onClick={changeName}>{dictionary.profile.changeName}</button>
        <button onClick={getAge}>{dictionary.profile.increaseAge}</button>
        <button onClick={changeActive}>
          {dictionary.profile.changeActive}
        </button>
      </div>
    </div>
  );
});
export default Profile;
