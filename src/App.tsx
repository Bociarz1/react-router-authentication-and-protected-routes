import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import Products from "./components/Products";
import UserProvider from "./components/Context";

function App() {

  return (
    // provide Context
    <UserProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="products" element={<Products />}/>
        <Route path="profile" element={<Profile/>}/>
      </Routes>
    </UserProvider>
  );
}

export default App;
