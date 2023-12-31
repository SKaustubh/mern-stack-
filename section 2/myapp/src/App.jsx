import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import EventHandling from "./components/EventHandling";
import StateManagement from "./components/StateManagement";
import Todo from "./components/Todo";
import Browse from "./components/Browse";
import { Toaster } from "react-hot-toast";
import ManageUser from "./components/ManageUser";
import { AppProvider } from "./AppContext";
import UserAuth from "./UserAuth";

function App() {
  return (
    <div>
      <Toaster position="top right" />

      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Routes>
            <Route element={<Home />} path="/" />

            <Route element={<Login />} path="/Login" />
            <Route element={<Browse />} path="/Browse" />
            <Route element={<ManageUser />} path="/ManageUser" />
            <Route element={<Signup />} path="/Signup" />
            <Route element={<EventHandling />} path="/EventHandling" />
            <Route element={<StateManagement />} path="/StateManagement" />
            <Route element={<UserAuth><  Todo /></UserAuth>} path="/TodoList" />
            <Route element={<NotFound />} path="*" />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
