//user schema

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

   
    "picture": {type:String, required: true},
    "name": {type:String, required: true},
    "email": {type:String, require: true},
    "dob": {type: String, required: true}
},{
    timestamps: true,
    versionKey: false
}

);

const UserModel = mongoose.model("UserModel", UserSchema)

module.exports = UserModel;