/**
 * Created by AF1 on 4/18/17.
 */

// Require Mongoose
var mongoose = require('mongoose');

// Create the schema

// SCHEMA FOR USERS
var UserSchema = new mongoose.Schema({
    email: String,
    password: String

}, {timestamps: true});

mongoose.model('User', UserSchema); // We are setting this Schema in our Models as 'Task'
