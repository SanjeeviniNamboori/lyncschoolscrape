
var express = require('express');
var session = require('client-sessions');
var ejs =  require('ejs');
var flash = require('connect-flash');
var bodyParser =  require('body-parser');
var app = express();
var mysql = require('mysql');
var nodemailer = require("nodemailer");
var jq=require("jquery");
var module = require("module");
var date= Date();
var registration = require('./registration.js');
var login=require('./login.js');
var profile = require('./profileuser.js');
var contact = require('./contact.js');
var sell = require('./sell.js');
var forgotpassword = require('./forgotpassword.js');
var changepassword = require('./changepassword.js');
var deleteimg = require('./deleteuserimg.js');
var cats = require('./cats.js');
var listapro = require('./listaproduct.js');
var logout = require('./logout.js');
var changeemail = require('./changeemail.js');
var verifyreguser = require('./verifyreguser.js');
var verifyuserchangemail = require('./verifyuserchangemail.js');
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  cookieName: 'session',
  secret: 'eg[isfd-8yF9-7w2315df{}+Ijsli;;to8',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
  httpOnly: true,
  secure: true,
  ephemeral: true
}));

app.get('/',function(request,response){
  
  /*console.log("happens");*/
cats.getdropdowns1().then(function(listofcategories){
  /*for(var t =0; t<listofcategories.length; t++){
    console.log(" In home route" +  listofcategories[t].id  + " " + listofcategories[t].quantity + "" );
  }*/
  response.render('index.ejs',{categories: listofcategories});
}).catch(function(err){
  console.log(err);
});
    
});
app.get('/createaccount',function(request,response){
    response.render('createaccount.ejs');
});
app.get('/login',function(request,response){
    response.render('login.ejs');
});

app.get('/dashboard',function(request,response){
    response.render('dashboard.ejs');
});
app.post('/register',registration.getregistrationformvalues);
app.get('/register',function(request,response){
  response.redirect('/createaccount');
});

app.get('/verify',verifyreguser.verifyreguser);


app.post('/loginuser',login.loginofuser);

app.get('/logout',logout.logoutuser);
   
app.get('/profile',profile.profileofuser);

app.get('/changepassword', changepassword.changePassword);

app.get('/changeemail',changeemail.changeEmail);

app.post('/changep', changepassword.changeP);

app.post('/changeE' , changeemail.changeE);

app.get('/changeE', function(request,response){
  response.redirect('/profile');
})

app.post('/uploaduserimage', profile.userimage);

app.get('/contactus',function(request,response){
    response.render('contactus.ejs');
});

app.get('/forgotpassword' , function(request,response){
response.render('forgotpassword.ejs');
});

app.get('/error' ,function(request,response){
  response.render('error.ejs');
});

app.post('/contact', contact.contactUs);

app.post('/forgotpassword',function(request,response){
  var email = request.body.email;
  forgotpassword.checkuser(email).then(function(mail){
  return forgotpassword.sendpasscodetomail(mail);
}).then(function(updatenewpassvalues){return forgotpassword.updateusernewpasscode(updatenewpassvalues)}).then(function(h){
  if(h==1){
    response.render('forgotpassconfirm.ejs');
  }else{
    response.redirect('/error');
  }
}).
  catch(function(error) {
  console.log('oh no!!!', error);
  
});
});

app.get('/sell',sell.sellanitem);

app.post('/sub',cats.getsubdropdowns);


app.post('/listaproduct', listapro.listP );

app.get('/listaproduct',sell.sellanitem);

app.get('/deleteuserimg', deleteimg.deleteimg);


app.get('/verifychangemail',verifyuserchangemail.verifyuserchangemail);




app.listen(8080);
console.log('Magic happens on  port 8080');