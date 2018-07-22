/**
 * Created by digitallync on 21-10-2016.
 */

//var mail = require('C:/Users/Sanjeevini/markmyevent/javascript/mail.js');
var mongoose = require('mongoose');
//var bcrypt = require('bcrypt');
mongoose.Promise = global.Promise;
var Mail = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/mail.js');
var User = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/models/userd.js');
var date  =  new Date();
var sms = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/javascript/sms.js')

exports.registeruser= function(request,response){
    var ip= request.connection.remoteAddress.toString();
    var hostname = request.get('host');
    console.log(hostname);
    mongoose.connect('mongodb://Localhost/digitallync');
    console.log(request.body.uname);
    console.log(request.body.email);
    console.log(request.body.pass);
    console.log(request.body.phone);


    var new_user = new User({
        name:request.body.uname
        , email: request.body.email,
        phone:request.body.phone,
        password: request.body.pass,
        created_at: date,
        ip_address: ip,
        user_verified : false

    });


    new_user.save(function(err){
        if(err) console.log(err);
        else

            var m1 = new Mail(hostname,request.body.email);
         m1.triggerMail();
        /*   new mail.sendmail(hostname,new_user.email,new_user.name).then(function(i){
         if(i==1) {response.redirect('/');
         dialog.info("A verification link has been sent to your mail ");
         }
         else {response.render("error.ejs");}
         }).catch(function(error) {
         console.log('oh no', error);
         });

         */
        //console.log("values have been entered");
           // console.log(new_user);
       mongoose.connection.close();


   new sms.smservice(request.body.phone);
        //     console.log(jacob);

        response.render("index.ejs");
    });

}
