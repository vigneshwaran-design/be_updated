const {MongoClient} = require("mongodb");

module.exports = {
    db: null,
    async connect (){
        try {
            const connection = await MongoClient.connect("mongodb+srv://vignesh:welcome123@cluster0.5otn8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
            this.db = connection.db("MovieTicket");
            console.log("Connection success");
        } catch(err) {
            console.error(err)
        } 
    }
}