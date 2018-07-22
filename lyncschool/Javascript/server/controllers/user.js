'use strict';
//let router = require('express').Router();
let Users   = require('../models/user');
class UserInfo {
    
//    constructor(){
//        
//        console.log("in userinfo constructor");
//        this.saveUserInfo();
//    }
//    
    
    save(request,response,next){
       
        
      let users = new Users(request.body);
        users.save(function(error){
            if(error) console.log(error);
            else console.log('Success');
        });
        
     
        
//        //console.log("In saveuserinfo");
//     console.log(request.body.fname);
//        console.log(request.body.lname);
//        console.log(request.body.email);
//        console.log(request.body.mobile);
//        console.log(request.body.phone);
//        console.log(request.body.add);
//        console.log(request.body.city);
//        console.log(request.body.state);
//        console.log(request.body.course);
//        console.log(request.body.program);
//        console.log(request.body.filen);
//       
    };
    
    
}

module.exports = new UserInfo();