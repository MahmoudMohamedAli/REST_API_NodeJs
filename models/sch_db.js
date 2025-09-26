const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: 'Point'
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});


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
    },
    geometry: GeoSchema
});


const Sch_db = mongoose.model("sch_db", sch_db);
module.exports = Sch_db;