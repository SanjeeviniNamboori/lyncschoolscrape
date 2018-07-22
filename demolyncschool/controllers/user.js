

/**
 * Created by digitallync on 21-10-2016.
 */
var Login = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/login.js');
var fs = require('fs');
var module = require('module');
var multiparty = require('multiparty');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;
exports.controller = function(app){
    app.get('/',function(request,response){
        response.render('index.ejs');
    });


app.get('/dashboard', function(request,response){
    response.render("dashboard.ejs");
});

    app.get('/login', function (request,response){
        response.render("index.ejs");
    });

    app.get('/sample' ,function(request,response){
        response.render("image.ejs");
    });



    app.post('/uploaduserimage' , function(request,response){
       console.log("in route");

        var form = new multiparty.Form();
        form.parse(request, function(err, fields, files) {
            var n = fields.hi;
            console.log("value of n" + n);
            var img = files.userPhoto[0];
            console.log(files.userPhoto[0]);
            console.log("originalfilename" + files.userPhoto[0].originalFilename);
            fs.readFile(img.path, function (err, data) {
                if (err) throw err;
                var path = "views/uploads/" + img.originalFilename;
                var temp = "uploads/" + img.originalFilename;
                var newpath = temp.toString();
                console.log(path);
                console.log("new path" + newpath);

                fs.writeFile(path, data, function (error) {
                    if (error) throw error;
                    //response.redirect('/profile');
                    console.log("uploaded successfully");
                });


            });

        });

    });






















/*app.post('/login', function (request,response) {
var email = request.body.email;
    console.log("hell" + email);
    var password  = request.body.password;
    console.log("hell"+ password);
   // var v1 = new Login(email,password);
   // v1.checkLogin();
});*/


app.post('/login', function (request,response) {
   var email = request.body.email;
    var password = request.body.password;
    /*var j = new Login(email,password);
  // var status  =  j.checkLogin();
  //  Login.checklogin();
    //console.log("aaaaaa" + status);*/


Login.Login(email,password,function (e,p) {
    console.log(" in loop" + e);
    console.log("in loop" + p);
    MongoClient.connect('mongodb://Localhost/digitallync',function (err,db) {
        if(err) {console.log(err);} else
            db.collection('users').findOne({"email": e , "password" : p},function (error,object) {

                 if(!object){
                     response.render('index.ejs',{error: "Invalid email ID or password "});
                 } else {
                     if((e == object.email) && (p == object.password) && (object.user_verified == true)){
                         request.session.user = object;
                         console.log("In user file " + request.session.user.name);
                         response.render('dashboard.ejs',{AccountNumber: object._id, AccountHolderName: request.session.user.name} );
                     }else{
                         response.render('index.ejs' ,{error: "Invalid email ID or password"});
                     }
                 }

            });
    });
});

});


app.post('/otp',function (request,response) {
console.log("In otp function");

});


    
//    app.get('/demourl' , function(request,response){
//       console.log("Anusha");
//        let a = "sanjeevini";
//        let b = "rao";
//        console.log(${a});
//    });
//    
    

} // end of controller function

