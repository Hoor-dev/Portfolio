 const express=require("express")

 const app=express()
 const path= require("path")
 const port=7100
 const mongoose=require("mongoose")
 mongoose.connect("mongodb://localhost:27017/Hoorudb")

 
 app.use(express.json())
 app.use(express.static(path.join(__dirname, "public")));
 app.use(express.urlencoded({extended:true}))
 const userSchema= new mongoose.Schema({
    username:String,
    userpass:String,
    useremail:String,
    description:String,
   //  meeting:Date
 })
 app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","index.html"))
 })
 const user=mongoose.model("user",userSchema)
 app.post("/contactme",async(req,res)=>{
   console.log("Received form data:", req.body);
    try{
       const client= new user(req.body);
       await client.save()

       console.log('data save success')
       res.redirect("/"); 
       res.send("client info has been saved")
    }
    catch(error){
        res.status(500).send("error has occured")
    }
 })

 app.listen(port,()=>{
    console.log("server is working ") 
 })

