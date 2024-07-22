const express=require('express')
const{mongoose}=require('mongoose')
const routes=require('./routes.js')
const app=express();
const PORT=3005;
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
});
app.use(express.json());
app.use('/',routes);
mongoose.connect("mongodb://localhost:27017/USER")
const database =mongoose.connection;
database.on("error",(error)=>{
    console.log(error);
});
database.once("connected",()=>{
    console.log("Database Connected");
});