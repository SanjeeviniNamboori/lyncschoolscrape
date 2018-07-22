'use strict';
let express = require('express');
let router = express.Router();
let user = require('./controllers/user');
class Api{
    
    constructor(){
        this.router = router;
        this.init();
        //this.sanju= sanju;
        
    }
    
    init(){
        
        this.router.post('/reg', user.save.bind(express));
        
        
        
        
        
        
    }
 
    
    
}


module.exports = Api;