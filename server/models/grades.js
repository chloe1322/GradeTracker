const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true
    },
    assessment: {
        type: String,
        required: true
    },
    mark: {
        type: Number,
        required:true
    },
    weight: {
        type: Number,
        required:true
    },
    date: {
        type: String,
    }

});

const gradeModel = mongoose.model("grades", gradeSchema);
module.exports = gradeModel;