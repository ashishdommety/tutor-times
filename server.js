const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;

// Serve static files from the React app (New website)
app.use(express.static(path.join(__dirname, 'client/build')));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/login", function(req,res){
  console.log("recieved request for login");
  res.json({message: 'registered by back-end'});
  // check in database if user exists
  // if user doesn't exist, write them in and serve introduction page
  // if they do exist, respond with their profile object (either tutor or student)
})

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