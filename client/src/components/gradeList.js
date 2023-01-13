import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function DisplayGrades () {
    const [gradeList, setGradeList] = useState ([]);

    const [name, setName] = useState("");
    const [assessment, setAssessment] = useState("");
    const [mark, setMark] = useState(0);
    const [weight, setWeight] = useState(0);
    const [date, setDate] = useState("");

    const [overallGrade, setGrade] = useState(0);
    const [subjectList, setSubjectList] = useState("");

    // calculates grade average
    function calculateOverall() {
        var array = subjectList.split(", ");
        var newArray = []
        for (var i = 0; i < array.length; i++) {
            newArray[i] = {name:array[i], number: 0, weight: 0}
        }

        for (var i = 0; i < gradeList.length; i++) {
            var index = array.indexOf(gradeList[i].name);
            if (index >= 0) {
                newArray[index].number = newArray[index].number + (gradeList[i].mark * gradeList[i].weight)
                newArray[index].weight = newArray[index].weight + gradeList[i].weight
            }
        }

        var sum = 0
        var counter = 0

        for (var i = 0; i < newArray.length; i++) {
            if (!(newArray[i].weight === 0)) {
                counter = counter + 1;
                sum = sum + (newArray[i].number / newArray[i].weight)
            }
        }

        if (!(counter == 0)) {
        setGrade(sum/counter)
        } else {
        setGrade(0)
    }}

    // creates a new grade
    const createGrade = () => {
        Axios.post("http://localhost:3001/grade/createGrade", {name: name, assessment: assessment, mark: mark, weight: weight, date: date}).then((response) => {
        setGradeList([...gradeList, {name:name, assessment: assessment, mark: mark, weight:weight, date: date}]);
        })
    }

    // gets the grades
    useEffect(() => {
        Axios.get("http://localhost:3001/grade/getGrades").then((response) => {
        setGradeList(response.data)
        })
    }, []);

    // deletes grade
    function deleteGrade (id) {
        console.log(id);
        Axios.delete(`http://localhost:3001/grade/${id}`).then((response) => {
            const filtered = gradeList.filter((el) => el._id != id);
            setGradeList(filtered);
        })
    }

    const Grade = (props) => (
        <tr>
            <td>{props.grade.name}</td>
            <td>{props.grade.assessment}</td>
            <td>{props.grade.mark}</td>
            <td>{props.grade.weight}</td>
            <td>{props.grade.date}</td>
            <td><button className = "deleteButton" onClick = {() => {
                props.deleteGrade(props.grade._id);}}>Delete</button>
                <Link className = "editButton" to = {`/updateGrade/${props.grade._id}`}>Edit</Link></td>
        </tr>
        );

    function gradesDisplay() {
    return gradeList.map((grade) => {
        return (
        <Grade
            grade = {grade}
            deleteGrade={() => deleteGrade(grade._id)}
            key={grade._id}
        />)
    })}

    return (
    <div className="Display">
        <table className = "gradeDisplay" style={{ textAlign: "left" }}>
        <thead>
            <tr>
            <th>Subject</th>
            <th>Assessment Type</th>
            <th>Mark</th>
            <th>Weight</th>
            <th>Date</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>{gradesDisplay()}</tbody>
        </table>

        <div className = "createGrade">
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
            <button onClick = {createGrade}> Add Grade</button>
        </div>

        <div className = "calculateOverall">
            <input className = "gradeInput" type = "text" placeholder = "Please type in the subject(s), separated by commas, of the grade you want to calculate"
            onChange = {(event) => {
              setSubjectList(event.target.value);
            }}></input>
            <button onClick = {calculateOverall}>Calculate Grade</button>
            <label className = "gradeLabel">{overallGrade}%</label>
        </div>

    </div>
    )
}
