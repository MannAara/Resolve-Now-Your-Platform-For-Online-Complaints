const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/Complaint-Register")
.then(()=>{
   console.log("connected to mongodb")
})