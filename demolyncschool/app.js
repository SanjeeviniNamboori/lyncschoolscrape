/**
 * Created by digitallync on 21-10-2016.
 */

var User = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/models/userd.js');

var express =  require('express');
var app  = express();
//module.exports=app;
var fs= require('fs');
var bodyParser =  require('body-parser');
var ejs = require('ejs');
var mongoose  =  require('mongoose');
var flash = require('connect-flash');
var session = require('express-session');
var module = require('module');
var cookieParser = require('cookie-parser');

app.use(cookieParser());


mongoose.createConnection('mongodb://Localhost:27017/digitallync');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(flash());


 // app.use(express.cookieParser('keyboard cat'));
//  app.use(express.session({ cookie: { maxAge: 60000 }}));
  app.use(flash());



app.use(session({ cookie: { maxAge: 60000 },
    secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
    duration : 30*60*1000,    //thirty minutes duration
    activeDuration : 5*60*1000,
    httpOnly:true,
    secure:true,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: true }}));

app.listen(8000);




console.log('Magic happens on  port 8000');

// configuration for controllers
fs.readdir('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/controllers/',function(err,files){
    if(err){
        console.log(err);
    }
    files.forEach(function(name){
        if(name.substr(-3) == '.js'){
           route = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/controllers/'+name);
            route.controller(app);
        }
    });
});

// end of configuration for controllers

