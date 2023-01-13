import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";

export default function Calculate () {
    const [currentGrade, setCurrentGrade] = useState(0);
    const [targetGrade, setTargetGrade] = useState(0);
    const [finalWeight, setFinalWeight] = useState (0);
    const [gradeNeeded, setGradeNeeded] = useState (0);

    // calculates grade needed
    function calculateGradeNeeded () {
        if (finalWeight !== 0) {
        var gradeNeededCalculation = (targetGrade - (1 - finalWeight) * currentGrade) / finalWeight
        setGradeNeeded(gradeNeededCalculation);
        } else {
        setGradeNeeded(0);
        }
    }

    return (
        <div className = "calculateFinal">
            <div>
                <h1 className = "header1">Calculate the grade needed on the final to get your target grade</h1>
            </div>
            <input className = "currentGradeInput" type = "number" placeholder = "Current Grade"
            onChange = {(event) => {
              setCurrentGrade(event.target.value);
            }}></input>
            <input className = "targetInput" type = "number" placeholder = "Target Grade"
            onChange = {(event) => {
              setTargetGrade(event.target.value);
            }}></input>
            <input className = "finalWeightInput" type = "number" placeholder = "Final Weight"
            onChange = {(event) => {
              setFinalWeight(event.target.value / 100);
            }}></input>
            <button onClick = {calculateGradeNeeded}>Calculate Grade Needed</button>
            <label className = "gradeNeededLabel">{gradeNeeded}%</label>
        </div>
    )
}
