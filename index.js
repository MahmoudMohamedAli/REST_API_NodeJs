const express = require('express');
const app = express();
const bodyres = require('body-parser');
const mongoose = require('mongoose');

const dbURI = "mongodb+srv://mahmoud:Sad12345678%23@mahmoudcluster.dtx5zsj.mongodb.net/?retryWrites=true&w=majority&appName=MahmoudCluster";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Db Connected")
   // app.listen(4000)})
  })
  .catch((err) => console.log(err));
mongoose.Promise = global.Promise;

app.use(bodyres.json());

app.use("/api", require("./routes/app"));

app.use(function(err,req,res,next)
{
  console.log(err);
  res.status(422).send({"err": err.message});  

});

app.listen(process.env.PORT || 4000, () => {
   console.log("Server is running on port 4000");
});