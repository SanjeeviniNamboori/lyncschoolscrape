'use strict';
let router = require('express').Router();

let users = require('./models/users');
//let authMiddlewares = require('./controllers/authentication/index').middlewares;

class Router {
    constructor(app) {
        this.router = router;
        this.init();
    }

    init() {

        this.router.get('/', (req, res) => {

            res.render('home', {
                success: false
            });
        });

        this.router.get('/programs', (req, res) => {

            res.render('programs');
        });

        this.router.get('/courses', (req, res) => {

            res.render('courses list');
        });

        this.router.get('/apply', (req, res) => {

            res.render('apply.ejs');
        });

        this.router.get('/thankyou', (req, res) => {
            res.render('thankyou');
        });

        this.router.get('/dashboard', (req, res) => {

            res.render('dashboard', {
                env: 'production'
            });
        });

      this.router.get('/frontend', (req,res) => {
          res.render('mobile-dev');
      });

this.router.get('/coursescopy', (req,res) =>{
   res.render('coursescopy'); 
});
       
        this.router.get('/coursescopyux', (req,res) =>{
   res.render('coursescopyux'); 
});
        
        
      this.router.get('/javascript', (req,res) => {
          res.render('js-dev');
      });    
        
         this.router.get('/coursescopyajs', (req,res) => {
          res.render('angular');
      });  
        
         this.router.get('/coursescopyejs', (req,res) => {
          res.render('express');
      });
        
        this.router.get('/coursescopynjs', (req,res) => {
          res.render('node');
      });
        
        
        this.router.get('/coursescopyrjs', (req,res) => {
          res.render('react');
      });
        
        
          this.router.get('/mobile', (req,res) => {
          res.render('mdev');
      });
        
        
      /* this.router.get('/upload', (req,res) => {
           res.render('sample');
       }) ;
*/
      this.router.get('/ios', (req,res) => {
          res.render('ios');
      });  
        
        
         this.router.get('/android', (req,res) => {
          res.render('android');
      });  
        
        this.router.get('/meanstack', (req,res) => {
          res.render('meanstack');
      });  
          this.router.get('/mongodb', (req,res) => {
          res.render('mongodb');
      }); 
              this.router.get('/expressjs', (req,res) => {
          res.render('expressjs');
      }); 
               this.router.get('/angularjs1', (req,res) => {
          res.render('angularjs1');
      }); 
                 this.router.get('/nodejs1', (req,res) => {
          res.render('nodejs1');
      }); 
                      this.router.get('/devops', (req,res) => {
          res.render('devops');
      }); 
                        this.router.get('/cms', (req,res) => {
          res.render('cms');
      }); 
            this.router.get('/wordpress', (req,res) => {
          res.render('wordpress');
      });
               this.router.get('/drupal', (req,res) => {
          res.render('drupal');
      });
                 this.router.get('/unity3d', (req,res) => {
          res.render('unity3d');
      });
                         this.router.get('/home', (req,res) => {
                        res.render('home');
      });
    }
}

module.exports = new Router().router;
