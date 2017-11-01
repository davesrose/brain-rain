const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;

if(process.env.NODE_ENV == 'production'){
  // Gotten using `heroku config | grep MONGODB_URI` command in Command Line
  mongoose.connect('mongodb://heroku_fh7smq38:dgrhjablf5u448tf701pv6mfis@ds243295.mlab.com:43295/heroku_fh7smq38');
}
else{
  mongoose.connect('mongodb://localhost/policeDB');
}
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
