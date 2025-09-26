const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sch_db = new Schema({
    name: {
        type: String,
        required: true,
    },
    phonenum: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        default: false
    }
});

const Sch_db = mongoose.model("sch_db", sch_db);
module.exports = Sch_db;