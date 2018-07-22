'use strict';

let mongoose = require('mongoose');

let userSchema  = mongoose.Schema({
    firstname : {
        type:String,
        required: true
    },
    
    lastname : {
        type:String,
        required: true
    },
    
    email : {
        type:String,
        required: true,
        unique:true
    },
    
    mobilenumber : {
        type:String,
        required: true,
        unique:true
    },
    
    
    phonenumber : {
        type:String,
        required: false
    },
    
    address : {
        type:String,
        required: true,
        unique:false
    },
    
    city : {
        type:String,
        required: true
    },
    
    state : {
        type:String,
        required: true
    },
    
    course : {
        type: String,
        required: true
        
    },
    
    program : {
        type:String,
        required: true
    },
    
    resumename: {
        type: String,
    required : true
     },
    
    resumepath : {
        type: String,
        required: true
    } ,
    
    
    
    createdat :{
        type: String,
        required: true
    },
    
    ipaddress :{
        type: String,
        required: true
    }
    
});

module.exports  =  mongoose.model('users', userSchema);