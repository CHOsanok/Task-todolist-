import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useEffect, useState } from "react";
import PrivateRoute from "./route/PrivateRoute";
import api from "./utils/api";

function App() {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const storedToken = sessionStorage.getItem("token");
      if (storedToken) {
        const response = await api.get("/user/me");

        setUser(response.data.user);
      }
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute user={user} setUser={setUser}>
            <TodoPage user={user} setUser={setUser} />
          </PrivateRoute>
        }
      ></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route
        path="/login"
        element={<LoginPage user={user} setUser={setUser} />}
      ></Route>
    </Routes>
  );
}

export default App;
