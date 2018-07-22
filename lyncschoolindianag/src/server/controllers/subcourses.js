var  express = require('express');
var MongoClient = require('mongodb').MongoClient;
var configuration = require('../config/db.config');
var promise = require('promise');


exports.getCoursesList =  function(qid){
    return new promise(function(resolve,reject){
    console.log(" In get subCourses function ");
    var data ={}; var elements=[];
    MongoClient.connect(configuration.url,function (err,db) {
        if(db) {
            console.log("in db");
            var did = new require('mongodb').ObjectID(qid);
            console.log("hi" + did);
  var cursor =db.collection('subcourse').find({"course_id": did});
      cursor.each(function(error,object) {
          if(object){
          pagetitle = object.page_title;
          data.pagetitle = pagetitle;
          console.log("in subcourse" +  data.pagetitle);
          subcourseid = object._id;
          data.subcourseid = subcourseid;
          console.log("in subcourse" +  data.subcourseid);
          subcoursename = object.sub_course_name;
          data.subcoursename = subcoursename;
          console.log("in subcourse" +  data.subcoursename);
          subcoursedescription = object.sub_course_description;
          data.subcoursedescription = subcoursedescription;
          console.log("in subcourse" +  data.subcoursedescription);
          subcourseimage= object.sub_course_image;
          data.subcourseimage = subcourseimage;
          console.log("in subcourse" +  data.subcourseimage);

          
          elements.push({pagetitle:data.pagetitle,subcourseid: data.subcourseid,subcoursename:data.subcoursename, subcoursedescription:data.subcoursedescription,subcourseimage:data.subcourseimage});
          return resolve(elements);
          }
      else{
          console.log(error);
          return reject(error);
      }
    });
       
        } else {
            console.log(err);
        }
        
       
   });
        
        
        }); // end of promise
    
}
