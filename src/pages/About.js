import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import AboutAuthor from "./AboutAuthor";
import AboutApp from "./AboutApp";

const About = () => {
    
  return (
    <>
          <ul className="titles">
              <li>
                  <Link to="Author">Author</Link>
              </li>
              <li>
                  <Link to="AboutApp">About App</Link>
              </li>
          </ul>
          <div className="aboutHeading">
              <h2>hello from about page</h2></div><div>
          <div className="about">
              <Routes>
                  <Route path="AboutAuthor" element={<AboutAuthor />}></Route>
                  <Route path="AboutApp" element={<AboutApp />}></Route>

              </Routes>
          </div>
      </div></>
  )
}

export default About