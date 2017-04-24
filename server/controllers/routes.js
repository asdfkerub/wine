/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var User = mongoose.model('User');



module.exports = (function() {
    return {

        all_users: function(req, res) {
          // Find all tasks and then return that data in res.json()
          User.find({}).exec(function(err,data){
            if(err){
              console.log("ERROR RETRIEVING ALL USERS".red)
              res.redirect("/")
            }else{
              res.json(data)
            }
          })

        },

        add_user: function(req,res){
          User.find({email: req.body.email}).exec(function(err,data){
            if(err){
              res.json({error:'Error while looking for an existing user.'})
            }else{
              res.json({error:'Email is already registered.'})
            }
          })
          // var user = new User({email:"admin@admin.com",password:"admin"})
          // user.save(function(err,data){
          //   if(err){
          //     console.log("ERROR SAVING NEW USER".red)
          //     res.redirect("/")
          //   }else{
          //     res.redirect("/users")
          //   }
          // })
        },

        get_user: function(req,res){
          User.findOne({email:req.body.email},function(err,data){
            if(err){
              console.log("ERROR CANT FIND USER".red)
              res.redirect("/")
            }else{
              res.json(data);
            }
          })
        }






    }
})();
