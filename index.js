var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    // body-parser takes a string and turns into an object
    bodyParser = require('body-parser');

// Importing the todo routes
var todoRoutes = require('./routes/todos');

// Tell app to use body-parser to access request body that comes in on requests
// i.e. req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Tell express to reference the views folder for static html page
app.use(express.static(__dirname + '/views'));

// Tell express to reference the public folder for static html page styling and js
app.use(express.static(__dirname + '/public'));



// home page root route
app.get('/', function(req, res){
    res.sendFile("index.html");
});

// This line adds the '/api/todos' prefix to all todo routes
// so you don't have to repeat the prefix in every todo route
app.use('/api/todos', todoRoutes);

   
app.listen(port, function(){
   console.log("APP IS RUNNING ON PORT " + port); 
});