/**
 * Created by digitallync on 25/10/16.
 */

var nodemailer = require('nodemailer');
var Promise = require('promise');

Mail = function(hostname,email){
    this.email = email ;
    console.log(this.email);
    this.hostname = hostname;
    console.log(this.hostname);
}


Mail.prototype.triggerMail=function() {
    {
        var smtpTransport = nodemailer.createTransport("SMTP", {
            service: "Gmail",
            auth: {
                user: "supersample04@gmail.com",
                pass: "sundaytomonday"
            }
        });

        this.link = "http://" + this.hostname + "/verify?id=" + this.email;

        var mailOptions = {
            to: this.email,
            subject: "Please confirm your Email account",
            html: "Hello,<br> Please Click on the link to verify your email.<br><a href=" + this.link + ">Click here to verify</a>"
        }

        console.log(mailOptions);
       smtpTransport.sendMail(mailOptions, function (error, response) {
            if (error) {
                console.log(error);
                //return "failed";
              //  cc = 0;
               // return reject(error);

            } else {

                console.log("Message sent: " + response.message);
              //  cc = 1;
                //console.log("value of cc in mail tab" + cc);
                // return (cc);
               //  return resolve(cc);

            }
        });

    };
};
module.exports =  Mail;

