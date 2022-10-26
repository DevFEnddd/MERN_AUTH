 // connect database
const mongoose = require("mongoose");
 
async function connectMongo(){
    try {
        mongoose.connect("mongodb://localhost:27017/myProject")
        console.log("conmect success");
    } catch (error) {
        console.log("conmect fail" + error);   
    }
}

module.exports = connectMongo;