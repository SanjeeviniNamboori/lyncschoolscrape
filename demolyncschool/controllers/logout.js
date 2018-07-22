/**
 * Created by digitallync on 04/11/16.
 */

exports.controller = function(app){

    app.get('/logout' , function(request,response){
    request.session.destroy(function (error) {
      // console.log(error);
        if(error) {
            console.log(error);
            response.render("error.ejs");
        }else{
          //  console.log("in logout "+request.session.id);
            response.redirect('/');
        }
    });

    });
}
