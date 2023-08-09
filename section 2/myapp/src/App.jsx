import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import EventHandling from "./components/EventHandling";
import StateManagement from "./components/StateManagement";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />

          <Route element={<Login />} path="/Login" />
          <Route element={<Signup />} path="/Signup" />
          <Route element={<EventHandling />} path="/EventHandling" />
          <Route element={<StateManagement />} path="/StateManagement" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
