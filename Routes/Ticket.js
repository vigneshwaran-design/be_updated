var express = require('express');
var app = express.Router();
var TiceketModule = require('../Modules/Ticket');



app.get('/get', TiceketModule.getProduct);
app.put('/update/:email', TiceketModule.updateProduct);
module.exports = app;
