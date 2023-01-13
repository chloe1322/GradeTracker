import React from "react";
import { Link } from "react-router-dom";

export default function Navbar () {
    return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <div>
            <Link to = "/getGrades" className = "navbar-brand">Grade List</Link>
            <Link to = "/getCalculation" className = "navbar-brand">Calculate</Link>
            </div>
        </nav>
    )
}
