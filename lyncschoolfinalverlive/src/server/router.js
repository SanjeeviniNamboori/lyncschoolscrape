'use strict';
let router = require('express').Router();
let courses = require('./controllers/courses');
let subcourses = require('./controllers/subcourses');
let subcoursemain = require('./controllers/subcoursemain');

let users = require('./models/users');
//let authMiddlewares = require('./controllers/authentication/index').middlewares;

class Router {
    constructor(app) {
        this.router = router;
        this.init();
    }

    init() {

      /*  this.router.get('/', (req, res) => {

            res.render('home', {
                success: false
            });
        });
*/
        
          this.router.get('/', (req, res) => {

            res.render('home');
        });
        
        this.router.get('/programs', (req, res) => {

            res.render('programs');
        });

//        this.router.get('/courses', (req, res) => {
//
//            res.render('courseslist');
//        });
        
        
        this.router.get('/courses', (req,res) => {
        courses.getCoursesList().then(function(ele){
// for(var t =0; t<ele.length; t++){
//console.log(" In curses route" +  ele[t].id  + " " + ele[t].coursename + "" );
//}
         res.render('courseslist',{coursedata: ele});       
    }).catch(function(err){
                 console.log("In courses route" + err); 
                 
            });
        });
        
        
        
      this.router.get('/course' ,(req,res) => {
          var id = req.query.id;
          console.log("In courseroute" + id);
          subcourses.getCoursesList(id).then(function(ele1){
              for(var t =0; t<ele1.length; t++){
console.log(" In curses1 route" +  ele1[t].subcourseid  + " " + ele1[t].subcoursename + "" );
}
              
              res.render('subcourses',{subcoursedata: ele1});
              
              
          });
          
      })  ;
        
        
        this.router.get('/subcoursemain',(req,res) => {
            var id = req.query.sid;
            console.log("Biscuit" + id);
            subcoursemain.getModuleContent(id).then(function(ele2){
             console.log(" In curses2 route" +  ele2[0].title  + " " + ele2[0].description + "" +ele2[0].modules.length);   
                res.render('coursesmain',{maincoursedata:ele2});
            });
            
        });
        
//     this.router.get('/subcourses', (req,res) =>{
//   res.render('subcourses'); 
//});
        
        

        this.router.get('/apply', (req, res) => {

            res.render('apply');
        });

        this.router.get('/thankyou', (req, res) => {
            res.render('thankyou');
        });

        this.router.get('/dashboard', (req, res) => {

            res.render('dashboard', {
                env: 'production'
            });
        });

//      this.router.get('/frontend', (req,res) => {
//          res.render('mobile-dev');
//      });

this.router.get('/coursescopy', (req,res) =>{
   res.render('coursescopy'); 
});
       
        this.router.get('/coursescopyux', (req,res) =>{
   res.render('coursescopyux'); 
});
        
        
//      this.router.get('/javascript', (req,res) => {
//          res.render('js-dev');
//      });    
//        
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
        
        
//          this.router.get('/mobile', (req,res) => {
//          res.render('mdev');
//      });
//        
        
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
        
//        this.router.get('/meanstack', (req,res) => {
//          res.render('meanstack');
//      });  
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
//                      this.router.get('/devops', (req,res) => {
//          res.render('devops');
//      }); 
//                        this.router.get('/cms', (req,res) => {
//          res.render('cms');
//      }); 
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
         this.router.get('/Aboutus', (req,res) => {
                        res.render('Aboutus');
      });
        this.router.get('/contact', (req,res) => {
                        res.render('contact');
      });
        this.router.get('/coming', (req,res) => {
                        res.render('coming');
      });
    }
}

module.exports = new Router().router;
