const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const AWS = require('aws-sdk');
AWS.config.region = process.env.REGION;

// Serve static files from the React app (New website)
app.use(express.static(path.join(__dirname, 'client/build')));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// add routes
app.use("/",routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  if(process.env.NODE_ENV === "production"){
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  }else{
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
  }
});

// listen on PORT
app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});