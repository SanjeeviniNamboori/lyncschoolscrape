'use strict';

let app = require('./Javascript/server/app');
let mongoClient = require('mongodb').MongoClient;
let mongoose = require('mongoose');
let dbc = require('./configurations/database_config');

class Server{
    
    constructor(){
       
        this.mongooseconnection();
        this.app = app;
         this.port =  process.env.PORT || 8000;
        this.run();
    }
    
    mongooseconnection(){
        console.log("In mongoose connection");
        console.log(dbc.url);
        mongoClient.connect(dbc.url, function(error,db){
            if(db) console.log(" Connection made successfully !!");
            else if(error) console.log(error);
        });
      
    }
    
    run(){
        
       this.app.listen(this.port,() => { 
       console.log("Magic happens on port 8000");
       
       }); 
           
    }
  
    
}
new Server();