const express = require("express");
const router = express.Router();
const Sch_db = require("../models/sch_db");

router.get("/test", (req, res, next) => {
    res.send({METHOD: "Get"});
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