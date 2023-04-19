const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const dbConfig=require('./config/db.config')
app.use(express.json());

mongoose.connect(dbConfig.DB_URL)
const db=mongoose.connection
db.on("error", ()=>{
    console.log("Can't connect to Db");
})
db.once("open",()=>{
    console.log("Connected to mongo db");


})

require('./routes/customer.routes')(app)
require('./routes/khatabook.routes')(app)
require('./routes/user.routes')(app);
require('./routes/entry.routes')(app)

app.listen(7500,()=>{
    console.log("Server started is this port number: ", 7500)
})


