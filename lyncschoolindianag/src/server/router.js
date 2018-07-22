'use strict';
let router = require('express').Router();

let users = require('./models/users');
//let authMiddlewares = require('./controllers/authentication/index').middlewares;

let config = require('./config');
let courses = require('./controllers/courses');
let subcourses = require('./controllers/subcourses');
let subcoursemain = require('./controllers/subcoursemain');

class Router {
    constructor(app) {
        this.router = router;
        this.init();
    }

    init() {

        this.router.get('/', (req, res) => {

            res.render('home');
        });

        this.router.get('/programs', (req, res) => {

            res.render('programs');
        });

        this.router.get('/courses', (req, res) => {
            courses.getCoursesList().then(function(ele) {
                // for(var t =0; t<ele.length; t++){
                //console.log(" In curses route" +  ele[t].id  + " " + ele[t].coursename + "" );
                //}
                res.render('courseslist', { coursedata: ele });
            }).catch(function(err) {
                console.log("In courses route" + err);

            });
        });


        this.router.get('/course', (req, res) => {
            var id = req.query.id;
            console.log("In courseroute" + id);
            subcourses.getCoursesList(id).then(function(ele1) {
                for (var t = 0; t < ele1.length; t++) {
                    console.log(" In curses1 route" + ele1[t].subcourseid + " " + ele1[t].subcoursename + "");
                }

                res.render('subcourses', { subcoursedata: ele1 });


            }).catch(function(err) {
                console.log("In courses route" + err);

            });

        });


        this.router.get('/subcoursemain', (req, res) => {
            var id = req.query.sid;
            console.log("Biscuit" + id);
            subcoursemain.getModuleContent(id).then(function(ele2) {
                console.log(" In curses2 route" + ele2[0].title + " " + ele2[0].description + "" + ele2[0].modules.length);
                res.render('coursesmain', { maincoursedata: ele2 });
            });

        });




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


        this.router.get('/home', (req, res) => {
            res.render('home');
        });
        this.router.get('/Aboutus', (req, res) => {
            res.render('Aboutus');
        });
        this.router.get('/contact', (req, res) => {
            res.render('contact');
        });
        this.router.get('/coming', (req, res) => {
            res.render('coming');
        });


    }
}

module.exports = new Router().router;
