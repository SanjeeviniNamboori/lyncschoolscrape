'use strict';

let app = require('./src/server/app');
let dbConfig = require('./src/server/config/db.config');
let mongoose = require('mongoose');



mongoose.Promise = Promise;


class Server {

   constructor() {
       
       this.app = app;
       this.port = process.env.PORT || 8000;
       this.run();
   }

   mongoConnect() {
        mongoose.Promise = global.Promise;
       mongoose.connect(dbConfig.url);

       mongoose.connection.on('connected', () => {

           console.log("Mongo connection success");
       });

       mongoose.connection.on('error', () => {

           console.log("Mongo connection failure");
           this.mongoConnect();
       });
   }

   run() {

       this.app.listen(this.port, () => {

           console.log("App running at", this.port);
           this.mongoConnect();
       });
   }
}

new Server();