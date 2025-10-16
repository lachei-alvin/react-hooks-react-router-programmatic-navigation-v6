import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  // 🧠 useEffect watches login state
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/"); // redirect to home
    } else {
      navigate("/login"); // redirect to login
    }
  }, [isLoggedIn]);

  return (
    <div className="app">
      <NavBar logout={logout} />
      {/* 🔄 Share login() function with child routes */}
      <Outlet context={login} />
    </div>
  );
}

export default App;
