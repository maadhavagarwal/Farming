const express = require("express");
const app=express()
const { body, validationResult } = require("express-validator");
const User = require("../models/Courses");
const router = express.Router();
const fetchuser = require("../middlewere/Fetchuser.js");
const Courses = require("../models/Courses");

router.post("/addData",
fetchuser,
[
  body("name", "Enter a valid Name").isLength({ min: 3 }),
  body("description", "Enter a valid description").isLength({ min: 3 }),
  
  body("image", "Enter a valid image").isLength({ min: 3 }),
 
  body("price", "Enter a price of course").isNumeric(),
],





 async (req,res) =>{
 try{
    const {name, description,image,  price} = req.body;

    const errors = validationResult(req);
if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const data =new Courses({
    name,
    image,
    description,
    price,
    user:req.user.luser.id,
  });
  const saveData = await data.save();
  res.json(saveData); 
  console.log(saveData);// Corrected from req.json to res.json
   
  
 }
 catch(error)
 {
   // category,
    console.log(error);
    
    res.status(500).json({message:error.message});

 }
 }

);
router.get("/fetchAllCourses",fetchuser,async(req,res)=>{
  const data=await Courses.find();
  res.json(data);

});

router.get("/fetchAllCoursesAdmin",fetchuser,async(req,res)=>{
  const data=await Courses.find({user:req.user.luser.id});
  res.json(data);

});
router.post("/users",(req,res)=>{
  content=req.body;
  res.json(content);
})

router.delete(
  "/deleteCourse/:id", fetchuser,
  async(req,res)=>{
    try{
      let course =await Courses.findByIdAndDelete(req.params.id);
      if(!course)
      {
        res.status(404),send("NotFound")
      }
    course=await Courses.findByIdAndDelete(req.params.id)
    res.json(course);
    }
    catch (error)
    {
      console.log(error);
      res.status(500).json({message:error.message});
    }
    }
  
)

module.exports=router;