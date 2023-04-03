const mongoose = require("mongoose")
const config = require('config')
const db = "mongodb+srv://Srabani:cD3FSc4YOpmeRRA0@cluster01.j974f1t.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })
    }
    catch (err) {
        console.error(err.message);
        process.exit(1)
    }
} 
module.exports = connectDB;