'use strict';

let express = require('express');
let ejs = require('ejs');
let bodyParser = require('body-parser');
let join = require('path').join;
let router =  require('./getroutes');
let Api = require('./postroutes');

class App{
    constructor(){
        this.app = express();
        this.root = '/../../';
        this.middlewares();
        this.views();
        this.router();
        
    }
    
    
    middlewares(){
        
       this.app.use(bodyParser.json());
       this.app.use(bodyParser.urlencoded({extended:true}));
        
    }
    
    
   views(){
       this.app.set('views', join(__dirname,this.root,'views'));
       this.app.engine('html',ejs.renderFile);
       this.app.set('view engine','html');
      
       
   } 
    
    router(){
        this.app.use(router);
        //this.app.use(Api);
       let api= new Api();
        this.app.use('/api',api.router);
    
    }
    
   
    
}




module.exports = new App().app;