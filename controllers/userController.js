const User=require('../models/UserModel')
const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")


exports.createUser=async(req,res)=>{
    const {name,email,password}=req.body;
    const users= new User({
        name,
        email,
        password
    })
await users.save();
res.status(200).send("created successfully")
}

exports.login=async(req,res)=>{
    const{email,password}=req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json("Invalid Email password")
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
return res.status(400).json("Invalid email or password");
        }
        const token= jwt.sign({user_id:user._id,user_email:user.email},"secret_token",{
            expiresIn:"1h",
        })
        res.status(200).json(token);
    }
    catch(err)
{
    console.log(err)
}};