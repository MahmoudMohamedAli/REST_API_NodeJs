const express = require("express");
const router = express.Router();
const Sch_db = require("../models/sch_db");

router.get("/test", (req, res, next) => {

       // Parse latitude and longitude from the request query
    const lng = parseFloat(req.query.lng);
    const lat = parseFloat(req.query.lat);

    // Ensure coordinates are valid before proceeding
    if (isNaN(lng) || isNaN(lat)) {
        return res.status(400).send({ err: "Invalid longitude or latitude provided." });
    }
    Sch_db.aggregate([
        {
            $geoNear: {
                near: {
                    type: "Point",
                    coordinates: [lng, lat]
                },
                distanceField: "dist.calculated", // A new field that will contain the distance
                spherical: true,
                maxDistance: 100000 // The maximum distance in meters (100 kilometers)
            }
        }
    ]).then(function(results) {
        // Send the results back to the client
        res.send(results);
    }).catch(next); // Pass any errors to the Express error handler
});


router.post("/test", (req, res, next) => {
   // console.log(req.body);
   Sch_db.create(req.body).then(function(data){
    console.log(data);
    res.send(data);
   }).catch(next)
});

router.put("/test/:id", (req, res, next) => {
    Sch_db.findByIdAndUpdate({_id:req.params.id}, req.body)
    .then()
    {
        Sch_db.findOne({_id:req.params.id})
        .then(function(data)
        {
            res.send(data);
        })
    }
});

router.delete("/test/:id", (req, res, next) => {
    Sch_db.findByIdAndDelete({_id:req.params.id})
    .then(function(data){
        res.send(data);
    })
    
    //res.send({METHOD: "DELETE"});
});

module.exports = router;