import Register from "./RegisterForm";
import Login from "./LoginForm";
import { useState } from "react";
function AuthPage() {
  const [isMode, setIsMode] = useState(true);
  const handleClick = () => {
    setIsMode((prevMode) => !prevMode);
  };
  if (isMode === false) {
    return (
      <div>
        <Register />
        <button onClick={handleClick}>У меня уже есть аккаунт</button>
      </div>
    );
  } else if (isMode === true) {
    return (
      <div>
        <Login />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          onClick={handleClick}
        >
          У меня еще нет аккаунта
        </button>
      </div>
    );
  }
}

export default AuthPage;
