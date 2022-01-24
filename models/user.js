const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email: {
        type : String, 
        required: true, //without the email value, mongoose will throw error
        unique: true

    },
    password:{
        type: String,
        required: true,

    },
    name: {
        type: String,
        required: true,

    }
},{
    timestamps: true
});


const user = mongoose.model('user', userSchema)
module.exports = user;