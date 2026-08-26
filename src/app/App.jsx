import { Route, Routes } from "react-router";
import ToDoPage from "../pages/ToDoPage";
import AuthPage from "../pages/AuthPage";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route element={<ProtectedRoute />}>
          <Route index path="/" element={<ToDoPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
