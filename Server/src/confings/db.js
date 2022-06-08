const mongoose = require("mongoose")

const connect = () =>{

    return mongoose.connect("mongodb+srv://kishan_9981:kishan_9981@cluster0.iooxp.mongodb.net/?retryWrites=true&w=majority")
}

module.exports = connect;