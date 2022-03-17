var express = require('express');
var app = express.Router();
var registerModule = require("../Modules/Register");



app.get("/eg",(req,res,next)=>{
    res.send("100")
})
app.post('/signup', registerModule.signup );
app.post('/signin', registerModule.signin );

module.exports = app;