const userController=require("../controllers/userController")
const express=require("express")
const router= express.Router();

router.post("/register",userController.createUser);
router.post("/login",userController.login);

module.exports=router;