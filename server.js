var express = require("express");
 
const path = require('path');

// Create an instance of the express app.
 


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
app.set('views', path.join(__dirname, 'views'));
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
app.get("/", function(req, res) {

  res.render("index");
});
  
 



// Here we introduce HTML routing to serve different HTML files
 


// Syncing our sequelize models and then starting our Express app
// =============================================================
//db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
//});
