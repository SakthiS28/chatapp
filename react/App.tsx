import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Group";
import About from "./pages/Chat1";
import Contact from "./pages/Home";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Sakthhi from "./config/Sakthhi";



function App() {
  return (
    <div >
      <Routes><Route path="/group" element={<Home />} />
      <Route path="/chat1" element={<About />} />
      <Route path="/home" element={<Contact/>} />
      <Route path="/Register" element={< Register/>} />
      <Route path="/signin" element={< Signin/>} />
      <Route path="/sakthhi" element={< Sakthhi/>} />
   
 </Routes>
 </div>

);

}

export default App;

