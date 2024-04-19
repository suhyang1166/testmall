import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductAll from "./components/ProductAll";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);

  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
