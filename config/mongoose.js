const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://Prachi_056:%40Prac056@realmcluster.8e9iw.mongodb.net/Auth-Node-js")
  .then(() => console.log('Connected to Database'))
  .catch(err => console.log('Error connecting to database', err));

