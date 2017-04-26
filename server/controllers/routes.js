/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Require the model and save it in a variable
var User = mongoose.model('User');
var Wine = mongoose.model('Wine');



module.exports = (function() {
    return {

        all_users: function(req, res) {
          // Find all tasks and then return that data in res.json()
          User.find({}).exec(function(err,data){
            if(err){
              // if there is error in the server-side
              console.log("ERROR RETRIEVING ALL USERS".red)
              res.redirect("/")
            }
            if(data){
              // if there is data found
              res.json(data)
            }else{
              // if there is no data
              res.json({error:"Cant retriev all users"})
            }
          })

        },

        add_user: function(req,res){
          User.findOne({email: req.body.email}).exec(function(err,data){
            if(err){
              console.log("Error while trying to add a user".red)
              res.redirect("/")
            }
            if(data){
              res.sendStatus(400)
            }else{
              var user = new User({email:req.body.email,password:req.body.password})
                user.save(function(err,data){
                  if(err){
                    console.log("Error saving new user".red)
                    res.status(400).send("Error while creating a new user.");
                  }else{
                    res.sendStatus(200);
                  }
                })
            }
          })
        },

        get_user: function(req,res){
          User.findOne({email:req.body.email},function(err,data){
            if(err){
              console.log("ERROR CANT FIND USER".red)
              res.redirect("/")
            }
            if(data){
              // if there are data found
              if(data.password != req.body.password){
                res.json({error:"Password is incorrect."})
              }else{
                res.json(data)
              }
            }else{
              // if there is no data found
              res.json({error:"Email is not registered."})
            }
          })
        },

        add_wine: function(req,res){
          var wine = new Wine({title:req.body.title,_user:req.params.id})
          wine.save(function(err,data){
            if(err){
              console.log("Error saving a new wine")
              res.redirect('/')
            }
            res.sendStatus(200)
          })
        },

        all_wines: function(req,res){
          Wine.find({}).exec(function(err,data){
            if(err){
              console.log("Error trying to retrieve all wine".red);
              res.redirect("/");
            }
            if(data){
              res.json(data);
            }else{
              res.json({error:"Cant retriev all wines"});
            }

          })
        },

        user_wine: function(req,res){
          Wine.find({_user:req.params.id}).exec(function(err,data){
            if(err){
              console.log("Error trying to get user's wine".red);
              res.redirect("/")
            }
            if(data){
              res.json(data);
            }else{
              res.sendStatus(418)
            }
          })
        },

        delete_wine: function(req,res){
          Wine.remove({_id:req.params.id}).exec(function(err){
            if(err){
              console.log("Error while trying to delete a wine".red);
              res.sendStatus(418)
            }
            res.sendStatus(200)
          })
        },






    }
})();
