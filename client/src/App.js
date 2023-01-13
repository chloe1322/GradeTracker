import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/navbar";
import DisplayGrades from "./components/gradeList";
import Calculate from "./components/calculate";
import UpdateGrade from "./components/updateGrade";


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Routes>
        <Route path = "/getCalculation" element={<Calculate />} />
        <Route path = "/getGrades" element={<DisplayGrades />} />
        <Route path = "/" element={<DisplayGrades />} />
        <Route path = "/updateGrade/:id" element={<UpdateGrade />} />
      </Routes>
    </Router>
    
  );
}

export default App;
