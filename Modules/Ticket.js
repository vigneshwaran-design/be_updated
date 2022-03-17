const { ObjectId } = require('mongodb');
var mongo = require('../shared/Connection');

module.exports.getProduct = async (req,res,next) => {
    try {
        var response = await mongo.db.collection("Users").find().toArray()
        res.send(response);
    } catch(err) {
        console.error(err);
        res.status(500).send(err);
    }
}

module.exports.updateProduct = async (req,res,next) => {
    try{
        var response = await mongo.db.collection('Users').findOneAndUpdate({Email: (req.params.email)}, {$set: {...req.body}}, {returnNewDocument: true})
        res.send(response)
    }catch(err){
        console.error(err);
        res.status(500).send(err);
    }
}

