import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Links from "./pages/Links";
import NavLinks from "./pages/NavLinks";
import Login from "./pages/Login";
const isLogin = false;
function App() {
  return (
    <BrowserRouter>
      <Links />
      <NavLinks />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/" element={<About />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/login" element={<Login isLogin={true} />} />
        <Route path="/login" element={<Home />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
