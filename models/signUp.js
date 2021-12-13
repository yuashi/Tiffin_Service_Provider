const mongoose = require('mongoose');


//Scehma
const Schema = mongoose.Schema
const SignUpSchema = Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Contact:Number,
    Username:String,
    Password:String,
    Date:{
        type:String,
        default:Date.now()
    }
});

//Model
const SignUpUser = mongoose.model('customers',SignUpSchema);

module.exports = SignUpUser;