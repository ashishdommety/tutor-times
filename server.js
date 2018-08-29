const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const dummy = require("./dummy.js");

console.log(dummy);

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
});

app.get("/test", function(req,res){
  res.send(dummy);
})

app.get("/dashboard/:id", function(req,res){
  console.log('return all the users data');
});

app.post("/invite-student", function(req,res){
  console.log('send an email to a potential student');
});

app.get("/dashboard/:id/students", function(req,res){
  console.log("display all of the enlisted students");
});

app.get("/dashboard/:id/notes", function(req,res){
  console.log("get all students notes");
});

app.post("/dashboard/:id/edit-note", function(req,res){
  console.log("edit the notes that the user sent");
});

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