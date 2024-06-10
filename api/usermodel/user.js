const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
        type: String,

        required: true,
        unique: true,
        min: [2, "kindly write a username of length morethan or equal to 2"],
    },
    password:{
        type: String,

        required: true,
        
    
        min: [2, "password should of atleast 2 number "],
    } ,
})

const Usermodel = new mongoose.model('User', UserSchema);
module.exports = Usermodel;
