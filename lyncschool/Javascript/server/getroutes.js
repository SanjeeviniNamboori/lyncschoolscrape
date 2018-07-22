'use strict';

let router  = require('express').Router();
                    
                      
class Router{

    
    constructor(app){
    this.router = router;
    this.init();
}
      
    
    init(){
        
        
        this.router.get('/', function(request,response){       
        response.render("index.html");
                    });
                    
                    
                }  // end of init      

}


module.exports = new Router().router;