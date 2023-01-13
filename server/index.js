const express = require ("express");
const cors = require ("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://chloet:chloet@fitnesstrack.m8mskvj.mongodb.net/GradeDatabase?retryWrites=true&w=majority",{useNewUrlParser: true,
useUnifiedTopology: true});

const gradeRoute = require ("./routes/grade");
app.use("/grade", gradeRoute)


app.listen(3001, () => {
    console.log("Server running succesfuly");
})