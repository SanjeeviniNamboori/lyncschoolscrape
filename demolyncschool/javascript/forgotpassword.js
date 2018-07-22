var MongoClient = require('mongodb').MongoClient;
  //  , format = require('util').format;
var nodemailer = require('nodemailer');
var promise = require('promise');
var User = require('/Users/sanjeevini/Documents/sanjeevini/demolyncschool/models/userd.js');
var passcode = require('passcode');
var smtpTransport = nodemailer.createTransport("SMTP", {
    service: "Gmail",
    auth: {
        user: "supersample04@gmail.com",
        pass: "sundaytomonday"
    }
});




exports.f = function (request,response) {
    response.render('forgotpassword.ejs');
}


exports.forr = function (request,response) {
    var token = passcode.hotp({
        secret: "xyzzy",
        counter: 123
    });
    var generatedate = new Date();
    var generatedminutes = generatedate.getMinutes();
    var emailid = request.body.newpass;
    var hostname = request.get('host');


    MongoClient.connect('mongodb://Localhost/digitallync',function (err,db) {
          if(db) {
                   db.collection('users').findOne({"email" : emailid},function (error,object) {
                               if(object) {
                                   console.log("object found" + object.email);
                                    var out = object.email.toString();
                                   console.log("kiara" + out);
                                   response.redirect('/enterotp?id='+out);
                                   db.close();
                                   insertreset(emailid,token,generatedate,generatedminutes);
                                   } else
                                {
                                     console.log("no user exists with this email ID" + error);
                                    response.render('forgotpassword.ejs',{error:"No account with that email ID exists."});
                                 }
                    });
                 }
          else
               {
              console.log("db error " + err);
              response.render('forgotpassword.ejs',{error:"No account with that email ID exists."});
                 }


    });

} // end of function




var insertreset =  function(email,accesscode,generatedtime,generatedminutes){
    console.log("In insertreset function" +  email);
    console.log("In insertreset function" +  accesscode);
    console.log("In insertreset function" +  generatedtime);
    console.log("In insertreset function" +  generatedminutes);

    MongoClient.connect('mongodb://Localhost/digitallync',function (err1,db1) {
        console.log("connections");
if(db1){
    db1.collection('resetpasses').insertOne({"rsid" : email, "accesscode" : accesscode, "generatedtime" : generatedtime, "generatedminutes" : generatedminutes},function (error1,obj1) {
if(obj1) {
    console.log("succesfully entered");
    sendresetlink(email,accesscode);
}        else
{
    console.log(err1);
}
    });
}

    });
}// end of function


var sendresetlink = function (email,accesscode) {
    console.log("in sendresetlink");
    console.log("In sendresetlink" + email);
    console.log("In sendresetlink" +  accesscode);
    var hostname = "localhost";
    var smtpTransport = nodemailer.createTransport("SMTP", {
        service: "Gmail",
        auth: {
            user: "supersample04@gmail.com",
            pass: "sundaytomonday"
        }
    });
  //  var link = "http://" + hostname + "/verify?id=" + email;

    var mailOptions = {
        to: email,
        subject: "To finish verifying your email with Lync School, please enter the following security code:",
        html: "<b> <h2>"+ accesscode +"</h2></b><br><p> Lync School takes your account security very seriously. Lync School will never email you and ask you to disclose or verify your Lync School password, credit card, or banking account number. If you receive a suspicious email with a link to update your account information, do not click on the link—instead, report the email to Lync School for investigation.We hope to see you again soon.</p>"
    }

    smtpTransport.sendMail(mailOptions, function (error2, response2) {
        if (response2) {
            console.log("Message sent: " + response2.message);
            //return "failed";
            //  cc = 0;
            // return reject(error);

        } else {

            console.log(error2);
            //  cc = 1;
            //console.log("value of cc in mail tab" + cc);
            // return (cc);
            //  return resolve(cc);

        }
    });

}