/**
 * Created by digitallync on 21-10-2016.
 */

var twilio = require('twilio');
var Promise = require('promise');

exports.smservice = function(num){
    return  new Promise(function(resolve, reject) {
        //console.log("hi");
        console.log(num);
        var phonemumber = num;
        var accountSid = 'AC7a36b81fb5be99d46f3b8b3aaf64260d';
        var auth_token ='7db2a8c0b8482bc0b2924f0801f2f629';
//var authToken = "{{ auth_token }}";
//var client = require('twilio')(accountSid, authToken);
        var client = new twilio.RestClient(accountSid, auth_token);

        client.messages.create({
            body: "Thankyou for registering with Digital Lync !!!",
            //to: "+919908108921",
            to: phonemumber,
            // from: "+16512223344"
            from: "+16787924080"
        }, function(err, message) {
            if(err){
                console.log(err);
                console.log(err.message);
                return reject(err);
            }
            else
            {
                console.log(message);
                return resolve(1);
            }
            // process.stdout.write(message.sid);
        });

    });

};
