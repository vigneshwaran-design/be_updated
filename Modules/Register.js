const mongo=require("../shared/Connection")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signup=async(req,res,next)=>{
// Email ID Validation
const existUser = await mongo.db.collection("Users").findOne({Email: req.body.Email})
if(existUser) return res.status(400).send({msg: "Email already exists"})

// Encrypt Password
const salt = await bcrypt.genSalt(5);
req.body.password = await bcrypt.hash(req.body.password, salt);

// Save in Database
var data = await mongo.db.collection("Users").insertOne(req.body);
res.send(data);
}



module.exports.signin=async(req,res,next)=>{


//<-------------------SIGN IN VALIDATION------------------------>
const existUser = await mongo.db.collection("Users").findOne({Email: req.body.Email})
if(!existUser) return res.status(400).send({msg: "Email is not registered "})




//<-------------------PASSWORD COMPARE------------------------>
const isValid=await bcrypt.compare(req.body.password, existUser.password)
if(!isValid) return res.status(400).send({msg: "password doesn't match"})




//<-------------------GENERATING TOKEN------------------------>

const token = jwt.sign(existUser, "AJAY@123", {expiresIn: '30hr'})
res.send(token);


}  