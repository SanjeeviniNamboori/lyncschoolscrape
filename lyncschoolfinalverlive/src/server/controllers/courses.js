var  express = require('express');
var MongoClient = require('mongodb').MongoClient;
var configuration = require('../config/db.config');
var promise = require('promise');


exports.getCoursesList =  function(){
    return new promise(function(resolve,reject){
    console.log(" In get Courses function ");
    var data ={}; var elements=[];
    MongoClient.connect(configuration.url,function (err,db) {
  var cursor = db.collection('courses').find();
       cursor.each(function(err,item){
           if(item) { 
              
                   id =  item._id;
                   data.id= id;
                   console.log("hello " +data.id);
                   coursename = item.course_name;
                   data.coursename = coursename;
                   console.log("hello " +data.coursename);
                   courseimage = item.course_image;
                   data.courseimage = courseimage;
                   console.log("hello" +  data.courseimage);
elements.push({courseid:data.id,coursename: data.coursename,courseimage : data.courseimage});              
                   resolve(elements);
                         
           }  
           else 
               {
                 console.log(err);
               return reject(err);
                   
               }
       });   // end of for
       
       
       
       
   });
        
        
        }); // end of promise
    
}