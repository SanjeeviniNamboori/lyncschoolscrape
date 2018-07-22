/**
 * Created by digitallync on 21-10-2016.
 */

var promise = require('promise');
var u1 = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/user_reg.js');
var Verifyuser  = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/verifyuser.js');
var module = require('module');
var forgotpassword = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/forgotpassword.js');
var User = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/models/userd.js');
var mongoose  =  require('mongoose');
var MongoClient = require('mongodb').MongoClient
    , format = require('util').format;

exports.controller = function(app) {

    app.post('/reg', u1.registeruser);


    app.post('/', function (request, response) {
        response.render("index.ejs");
    });


    app.get('/' ,function (request,render) {
        response.render("ndex.ejs");
    });

    app.get('/dashboard', function (request, response) {
        response.render("dashboard.ejs");
    });


    app.get('/enterotp' , function (request,response) {
        console.log(" enterotp " + request.query.id);
       response.render("enterotp.ejs",{"userid" : request.query.id});
    });


    app.get('/verify', function (request, response) {
        var id = request.query.id;
        console.log("In usereg file" + id);

        Verifyuser.Verifyuser(id).then(function (userkey) {
            return Verifyuser.verifyaccount(userkey);

        }).then(function (status) {
            console.log(" hey" + status);
            if (status == 1) {
                response.render("verify.ejs");
            }
            else {
                response.render("error.ejs");
            }
        }).catch(function (error) {
            // if(error) response.render('error.ejs');
            console.log('oh no', error);
            response.render("error.ejs");
        });

    });

app.get('/forgot', forgotpassword.f );
    app.post('/for', forgotpassword.forr);
   /* app.get('/otp', function (request,response) {
var t = request.query.id;
        console.log("value of parameter" +  t);
    });*/


   app.post('/otp1' ,function (request,response) {
       console.log(" In otp route" + request.body.otp);
       console.log(" In otp route" + request.body.userm);
       MongoClient.connect('mongodb://Localhost/digitallync', function (err, db) {
           if (err) {
               console.log(err);
           } else
               db.collection('resetpasses').findOne({
                   "rsid": request.body.userm,
                   "accesscode": request.body.otp
               }, function (error, object) {
                   if (object) {console.log(object.rsid);
                       var t = object.rsid;
                   return response.redirect('/newpassword?id='+t);} else
                   {console.log(error); }
               });


       });


   });


    app.get('/newpassword',function (request,response) {
          console.log("in new password" + request.query.id);
      //  var y = request.query.id;
        response.render('newpassword.ejs',{"y":request.query.id});
    });



    app.post('/newpass', function (request,response) {
       var  a = request.body.n1;
        console.log("newpass " + a);
        var b= request.body.n2;
        console.log("new pass" + b);
        var c = request.body.n3;
        console.log("newpass" +c);
        MongoClient.connect('mongodb://Localhost/digitallync', function (err, db) {
            if (err) {
                console.log(err);
            } else
                db.collection('users').findAndModify(
                    {email: c}, // query
                    [['_id', 'asc']],  // sort order
                    {$set: {password: a}}, // replacement, replaces only the field "hi"
                    {}, // options
                    function (err, object) {
                        if (err) {
                            console.log("this is an error message" + err.message);

                        } else {
                            console.log(object);
                            response.render('/');

                        }
                    }); // find nd modify


        }); // end of mongoclient connect


    }); // end of post new pass function

app.get('/flash',function(request,response){
  // response.render('flash'); 
 response.render('flash.ejs', { expressFlash: request.flash('success'), sessionFlash: response.locals.sessionFlash });

});
    
    app.get('/demo', function(request,response){
//        console.log("In demo");
//      // response.render('flash',{message: request.flash('error')}) ;
//     // request.flash('info', 'Flash is back!')
//  //response.redirect('/flash');
//  response.render('flash.ejs', { expressFlash: request.flash('success'), sessionFlash: response.locals.sessionFlash });
//    
        
         request.session.sessionFlash = {
        type: 'success',
        message: 'This is a flash message using custom middleware and express-session.'
    }
        
        response.redirect( '/flash');   
    });
    
    

}


