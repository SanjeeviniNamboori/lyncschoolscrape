/**
 * Created by digitallync on 26/10/16.
 */
var promise = require('promise');

exports.Login = function(email,password,callback){
    console.log("hello world");

this.email = email;
    console.log("In login.js" + this.email);
    this.password=password;
    console.log("In login.js"+ this.password);
    callback(this.email ,this.password);

};





/*
checkLogin = function (email, password) {
   return new promise(function (resolve,reject) {
        console.log("hello worldd" + email );
MongoClient.connect('mongodb://Localhost/digitallync',function (err,db) {
    if(err) {console.log(err);} else
        db.collection('users').findOne({"email": email , "password" : password},function (error,object) {
            if(error){console.log(error); return reject(0);} else
            { return object.id;}
        });
});

   });
};*/



//module.exports = Login;
//module.exports= checkLogin;