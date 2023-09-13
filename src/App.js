import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Navbar";
import {BrowserRouter ,Route, Routes} from 'react-router-dom'
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import Login from "./Pages/Login"
import Signup from "./Pages/Signup";



const App = () => {
  return (
    <>
    <Header/>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        <Route path="/Women" element={<Women/>}/>
        <Route path="/Men" element={<Men/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Signup" element={<Signup/>}/>
         <Route path="/Login" element={<Login/>}/>
       
      </Routes>
      </BrowserRouter>
      <Footer/>
     
      
      
    </>
  );
};

export default App;
