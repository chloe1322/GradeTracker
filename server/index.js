const express = require ("express");
const cors = require ("cors");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(cors());
require('dotenv').config();

const port = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("Connection established successfully");
})


const gradeRoute = require ("./routes/grade");
app.use("/grade", gradeRoute)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

