const mongoose = require("mongoose");

const dbConnect = () => {
    try {
        const connection = mongoose.connect("mongodb+srv://harshparihar:lTACQZu09rPlQYNV@cluster0.pme6rh4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to database successfully...");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;