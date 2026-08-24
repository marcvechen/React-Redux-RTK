import { Route, Routes } from "react-router";
import ToDoPage from "./ToDoPage";
import Register from "./RegisterForm";
import Login from "./LoginForm";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<ToDoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
