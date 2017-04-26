/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');
// Require Schema
var Schema = mongoose.Schema;
// Create the schema

// SCHEMA FOR USERS
var UserSchema = new mongoose.Schema({
    email: String,
    password: String

}, {timestamps: true});

var WineSchema = new mongoose.Schema({
  title: String,
  _user: {type:Schema.Types.ObjectId,ref: 'User'}

},{timestamps:true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Users'
mongoose.model('Wine', WineSchema);
