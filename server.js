const express = require("express");
const aws = require("aws-sdk");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;

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

aws.config.region = 'US East (N. Virginia)';
app.get('/account', (req, res) => res.render('account.html'));
app.get('/sign-s3', (req, res) => {
  const s3 = new aws.S3();
  const fileName = req.query['file-name'];
  const fileType = req.query['file-type'];
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    res.write(JSON.stringify(returnData));
    res.end();
  });
});


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