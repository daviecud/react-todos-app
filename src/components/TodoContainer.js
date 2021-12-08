import React from "react"
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";
import Home from "../pages/Home"
import AboutAuthor from "../pages/AboutAuthor";
import AboutApp from "../pages/AboutApp";

const TodoContainer = () => {

  return (
    <>
    <Navbar />
    
    <>


        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} ></Route>
          <Route path="/about/*" element={<About />}></Route>
          <Route path="/about/Author" element={<AboutAuthor />}></Route>
          <Route path="/about/AboutApp" element={<AboutApp />}></Route>
          <Route path="*" element={<NotMatch />}></Route>

        </Routes>
      </>
      </>
    
  )
}

export default TodoContainer