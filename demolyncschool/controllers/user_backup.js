/**
 * Created by digitallync on 21-10-2016.
 */
var Login = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/login.js');
var module = require('module');
var MongoClient = require('mongodb').MongoClient,
    format = require('util').format;
exports.controller = function(app) {
        app.get('/', function(request, response) {
            response.render('index.ejs');
        });


        app.get('/dashboard', function(request, response) {
            response.render("dashboard.ejs");
        });

        app.get('/login', function(request, response) {
            response.render("index.ejs");
        });

        /*app.post('/login', function (request,response) {
         var email = request.body.email;
         console.log("hell" + email);
         var password  = request.body.password;
         console.log("hell"+ password);
         // var v1 = new Login(email,password);
         // v1.checkLogin();
         });*/


        app.post('/login', function(request, response) {
            var email = request.body.email;
            var password = request.body.password;
            /*var j = new Login(email,password);
             // var status  =  j.checkLogin();
             //  Login.checklogin();
             //console.log("aaaaaa" + status);*/


            Login.Login(email, password, function(e, p) {
                console.log(" in loop" + e);
                console.log("in loop" + p);
                MongoClient.connect('mongodb://Localhost/digitallync', function(err, db) {
                    if (err) { console.log(err); } else
                        db.collection('users').findOne({ "email": e, "password": p }, function(error, object) {

                            if (error) {
                                console.log(error);
                                response.render("error.ejs");
                            } else if (object == null) {
                                return response.redirect('/login');
                            } else {
                                console.log(object.name);
                                console.log(object._id);
                                request.session.user = object.name;
                                //  request.session.userid = request.session.id;
                                console.log(request.sessionID);

                                return response.render('dashboard.ejs', { AccountNumber: object._id, AccountHolderName: request.session.user });
                            }

                            // console.log(object);
                            //response.render("dashboard.ejs");

                        });
                });
            });

        });






    } // end of controller function
