/**
 * Created by digitallync on 28/10/16.
 */

var mongoose = require('mongoose');

var Promise = require('promise');

var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;


var User = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/models/userd.js');

exports.Verifyuser = function(id){
    return new Promise(function (resolve,reject) {
        this.usertoken =  id;
        console.log("In verifyuser file " + this.usertoken);
        if(this.usertoken != undefined){
            console.log("In if loop  " + this.usertoken);
            return resolve(this.usertoken);
        }else
            console.log(" In else loop" + no );
            return reject(console.log("User id havent received"));
    });

}


exports.verifyaccount = function(userkey){
return new Promise(function(resolve,reject){
    console.log("hello world");
    var mailid = userkey;
    console.log("In verifyaccount " + mailid);
    MongoClient.connect('mongodb://Localhost/digitallync', function(err, db) {
        if (err) throw err;
        else
            console.log("In elseee loop " + mailid);
        db.collection('users').findAndModify(
            {email: mailid}, // query
            [['_id', 'asc']],  // sort order
            {$set: {user_verified: true}}, // replacement, replaces only the field "hi"
            {}, // options
            function (err, object) {
                if (err) {
                    console.log("this is an error message" + err.message);
//status = false;
// response.redirect('error.ejs');// returns error if no matching object found
                    return reject(0);
                   // return false;

                } else {
                    console.log(object);
                    // response.redirect('/');
                    //return true;
                    return resolve(1);
                }
            }); // find nd modify

    });

});

    //var status = false; //bool


}







// module.exports = Verifyuser;
// module.exports =  verifyaccount;