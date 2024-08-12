const mongoose= require("mongoose")
const bcrypt=require("bcrypt")

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        reuired:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    }
})

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        return next()
    }
    const salt= await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
    next()
})

const user = new mongoose.model("user",userSchema)
module.exports=user;