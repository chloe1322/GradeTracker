const express = require("express");
const gradeModel = require("../models/grades");

const gradeRoutes = express.Router();

gradeRoutes.get("/getGrades", (req, res) => {
    gradeModel.find({}, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    }); 
});

gradeRoutes.get("/getCalculation", (req, res) => {
    gradeModel.find({}, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    }); 
});

gradeRoutes.post("/createGrade", async (req, res) => {
    let grade = req.body;
    let newGrade = new gradeModel (grade);
    await newGrade.save();
    res.json(grade);
})

gradeRoutes.route("/:id").delete((req, res) => {
    gradeModel.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) {
            res.json(error);
        } else {
            res.json(result);
        }
    });
})

gradeRoutes.post("/updateGrade/:id", async (req, res) => {
    gradeModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
})


module.exports = gradeRoutes;