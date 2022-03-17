const express=require("express")
const app=express()
const cors=require("cors")
const dotenv=require("dotenv")
const mongo=require("./shared/Connection")
const register=require("./Routes/Registerroute")
const TicketRouter = require('./Routes/Ticket');



mongo.connect()
app.use(cors())
app.use(express.json())
dotenv.config()

app.use("/testing",register)
app.use("/register",register)
app.use('/booked', TicketRouter);

const port=process.env.PORT|| 4000;


app.listen(port,function () {
    console.log("Server started successfully");
});