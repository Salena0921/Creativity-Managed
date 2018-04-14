const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const aws = require("aws-sdk");
const models = require("./models");

const passport = require("passport");
const session = require('express-session');

// Configure body parser for AJAX requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Serve up static assets
app.use(express.static("client/build"));

 // For Passport
app.use(session({ secret: 'changeThis',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport.js')(passport,models.User);

// Add routes, both API and view
const routes = require("./routes")(passport);
app.use('/',routes);

const S3_BUCKET = process.env.S3_BUCKET;
app.use('/s3', require('react-s3-uploader/s3router')({
  bucket: "creativity-managed",
  AWS_ACCESS_KEY_ID = "AKIAIYPF4RDXGGKHZCRQ",
  region: 'us-east-1', //optional
  signatureVersion: 'v4', //optional (use for some amazon regions: frankfurt and others)
  headers: {'Access-Control-Allow-Origin': '*'}, // optional
  ACL: 'private', // this is default
  uniquePrefix: true // (4.0.2 and above) default is true, setting the attribute to false preserves the original filename in S3
}));

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//add mongo heroku uri
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creativitymanaged-development"
);

// Start the API server
app.listen(PORT, function() {
  console.log("🌎  ==> API Server now listening");
});