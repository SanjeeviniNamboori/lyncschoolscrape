

/**
 * Created by digitallync on 21-10-2016.
 */





var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type: String, required: true, unique: false },
    email: { type: String, required: true, unique: true },
    phone: {type: String, required: true, unique: false },
    password: { type: String, required: true, unique: false },
    created_at : Date,
    ip_address: {type: String},
    user_verified : {type: Boolean}
});
module.exports = mongoose.model('users', userSchema);


/*
var resetpass =  new Schema({
    rsid: {type:String, unique:true},
    accesscode:{type:Number, unique:false},
    generatedtime: {type:String, unique: false},
    generatedminutes :{type: Number, unique:false}

});

module.exports =  mongoose.model('resetpass' , resetpass);*/
