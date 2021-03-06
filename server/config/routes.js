/**
 * Created by AF1 on 4/18/17.
 */


// Require the controllers
var route = require('./../controllers/routes.js');

// Define the routes
module.exports = function(app) {

    // Tasks routes ===================================================
    app.get('/users', function(req, res) {
        route.all_users(req, res);
    });
    app.post('/users/add',function(req,res){
      route.add_user(req,res);
    })
    app.post('/get_user',function(req,res){
      route.get_user(req,res);
    })
    app.post('/add/wine/:id',function(req,res){
      route.add_wine(req,res);
    })
    app.get('/wines',function(req,res){
      route.all_wines(req,res);
    })
    app.get('/users/wine/:id',function(req,res){
      route.user_wine(req,res);
    })
    app.post('/users/wine/delete/:id',function(req,res){
      route.delete_wine(req,res);
    })


};
