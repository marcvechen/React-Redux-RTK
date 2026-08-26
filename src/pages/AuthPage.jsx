import Register from "../features/auth/RegisterForm";
import Login from "../features/auth/LoginForm";
import { useState } from "react";
function AuthPage() {
  const [isMode, setIsMode] = useState(true);
  const handleClick = () => {
    setIsMode((prevMode) => !prevMode);
  };
  return (
    <div>
      {isMode ? <Login /> : <Register />}
      <button onClick={handleClick}>
        {isMode ? "У мене ще немає акаунта" : "У мене вже є акаунт"}
      </button>
    </div>
  );
}

export default AuthPage;
