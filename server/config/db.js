const mongoose = require("mongoose");
const db = "mongodb+srv://santoshinid18:UcYhrNY8x3oEsGx4@cluster0.4mewgm1.mongodb.net/?retryWrites=true&w=majority"
const connectDB = async() => {
    try{
        mongoose.set("strictQuery", true)
        await mongoose.connect(db,{
            useNewUrlParser: true,
            
        })
    }
    catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

module.exports = connectDB






