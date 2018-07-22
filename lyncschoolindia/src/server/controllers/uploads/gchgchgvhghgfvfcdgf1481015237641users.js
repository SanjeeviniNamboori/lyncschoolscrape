var  express = require('express');
var User = require('../models/users');
var fs= require('fs');
var promise = require('promise');
//var mail = require('./mail.js');
var multer	=	require('multer');
var path = require('path');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

/*
var storage	=	multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, '/uploads');
  },
  filename: function (req, file, callback) {
	  console.log(file+"     file details");
	  //var fileExt=path.extname(file.originalname));
	  console.log(file.originalname);
    callback(null, file.originalname + '-' + Date.now() +path.extname(file.originalname));
  }
});
      
var upload = multer({ storage : storage}).single('filen');
*/

exports.register =  function (req,res){
    var firstname = req.body.fname;
    console.log("ssanj" + req.files);
    var lastname = req.body.lname;
        var  email= req.body.email;
        var mobilenumber= req.body.mobile;
        var phonenumber= req.body.phone;
        var address= req.body.add;
        var city= req.body.city;
        var  state= req.body.state;
        var  course= req.body.course;
        var program= req.body.program;
        var resumename= req.files.filen.name;
        var createdat= new Date();
        var hostname = req.get('host');

    
      var new_user = new User({
        firstname:firstname,
        lastname: lastname,
        email:email,
        mobilenumber: mobilenumber,
        phonenumber:phonenumber,
        address:address,
        city:city,
          state:state,
         course:course,
          program:program,
          resumename:resumename,
          createdat: createdat

    });
    
   
  // var    sampleFile = req.files.filen;
    fs.readFile(req.files.filen.path, function (err, data) {
        // ...
    //    console.log()
        var fileName=req.body.email+Date.now()+req.files.filen.name;
  var newPath = __dirname + "/uploads/"+fileName;
  fs.writeFile(newPath, data, function (err) {
   console.log("done boy");
      // res.redirect("back");  
      res.redirect('/thankyou');
      
  });
        new_user.resumename=fileName;
        new_user.save(function(err){
       if(err) console.log(err);
       else{
           console.log(new_user.firstname+"    USer first name");
           console.log("successfully entered");}
            
});
        
})
     /*  upload(req,res,function(err1) {
		if(err1) {
			//return res.end("Error uploading file.");
            console.log(err1);
		} else{
		console.log("File is uploaded");
  
        }
	});*/
           
           
       
       /*.then(function(hostname,firstname,lastname,email,mobilenum,phonenum,add,city,state,courses,program,resumename){
     //  console.log("hello");
       return mail.Mail(hostname,firstname,lastname,email,mobilenum,phonenum,add,city,state,courses,program,resumename);
   });
     */
    
}

                 


