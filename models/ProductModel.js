const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    id:{
        type: String,
        unique: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        
    },
    price:{
        type: Number,
        required: true
    },
    image:{
        type: String,
        
    },
    rating:{
        rate:{
            type:Number,
        },
        count:{
            type: Number,
        }
    }
});
const productModel = new mongoose.model("product",productSchema)

module.exports=productModel;