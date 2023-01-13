import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router";

export default function UpdateGrade () {
    const [name, setName] = useState("");
    const [assessment, setAssessment] = useState("");
    const [mark, setMark] = useState(0);
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("");

    const params = useParams();

    const updateGrade = () => {
        Axios.post(`http://localhost:3001/grade/updateGrade/${params.id}`, {name: name, assessment: assessment, mark: mark, weight: weight, date: date}).then((response) => {
        })
    }

    return (
        <div className = "updateGrade">
            <input className = "addGradeInput" type = "text" placeholder = "Subject" onChange = {(event) => {
            setName(event.target.value);
            }}></input>
            <input className = "addGradeInput" type = "text" placeholder = "Assesment Type" onChange = {(event) => {
            setAssessment(event.target.value);
            }}></input>
            <input className = "addGradeInput" type = "number" placeholder = "Mark" onChange = {(event) => {
            setMark(event.target.value);
            }}></input>
            <input className = "addGradeInput" type = "weight" placeholder = "Weight" onChange = {(event) => {
            setWeight(event.target.value);
            }}></input>
            <input className = "addGradeInput" type = "text" placeholder = "Date (optional)" onChange = {(event) => {
            if (event.target.value == null) {
                setDate("");
            } else {
                setDate(event.target.value);
            }
            }}></input>
            <button onClick = {updateGrade}> Save Changes</button>
        </div>
    )
}