const express =  require("express");
const cors=require('cors')
const app=express();

const productRoutes=require("./routes/productRoute")
const userRoutes = require("./routes/userRoute")
const cartRoutes=require("./routes/cartRoute")
const orderRoutes=require("./routes/orderRoute")

app.use(express.json());
const mongoose=require('mongoose');

//connection
mongoose.connect("mongodb+srv://karthikas:karthikas1411@cluster0.igwmdky.mongodb.net/ecommerce").then(()=>{
    console.log("connected to database");
})

//routes
app.use("/products",productRoutes);
app.use("/user",userRoutes);
app.use("/cart",cartRoutes);
app.use("/order",orderRoutes);
//connection for front end
app.use(cors());


//ports
app.listen(3000,()=>{
    console.log("Server running in port 3000");
})
