const routes =require("./routes.js")
const express =require('express');
const {mongoose} = require ('mongoose');
const dotenv=require('dotenv');
dotenv.config();
const uri= process.env.mongo_uri;

const app =express();
const PORT =3005;
app.listen(PORT,()=>{
console.log(`Server is running on the port ${PORT}`);
});
app.use(express.json());
app.use('/',routes);

mongoose.connect(uri

);

const database =mongoose.connection;
database.on("error",(error)=>{
    console.log("error");
});
database.once("connected",()=>{
    console.log("Database Connected");
})