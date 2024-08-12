const express=require("express");
const router=express.Router();
const orderController=require("../controllers/orderController")
const auth=require("../middlewares/auth")

router.post('/post',auth,orderController.manageOrder)
router.get('/display',auth,orderController.getorder)
module.exports=router;