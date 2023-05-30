import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "./components/User";
import { getUsers } from "./store/asyncAction/getUsers";
import { Routes, Route, Link } from "react-router-dom";
import GitHub from "./pages/GitHub";
import Counter from "./pages/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/github">GitHub</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/github" element={<GitHub />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
};

export default App;
