//Require Module
const express = require("express");
const database = require("./database/database");
const User = require('./database/schema')
const cors = require("cors");

// const bodyParser = require('body-parser') // if body data not accessible

/*  const path = require('path')
Define Database Path
Serving static files: If you are serving static files such as images, CSS files, or JavaScript files, you might need to use the path module to specify the directory that contains the static files.

Working with views: If you are using a view engine such as EJS or Handlebars, you might need to use the path module to specify the directory that contains the views.

Configuring the server: If you are configuring the server, you might need to use the path module to specify the directory that contains the server configuration files. */


//Define App
const app = express();

// App will use
app.use(express.json());
app.use(cors());
// app.use(bodyParser.json()) // if not getting body data then use this

// Server Running
app.listen(3000, () => {
  console.log("Server is Running on http://localhost:3000/");
});

//APIs

app.post("/", async (request, response) => {
  let newUser = new User({
    email: request.body.email,
    password: request.body.password,
  });

  const document = await newUser.save();
  response.json("User Registred Successfully."); // can use response.send() if sending something
});
