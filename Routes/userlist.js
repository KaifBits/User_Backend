const express=require("express");
const {getuserlist, pointupdate,usersort}=require("../Controllers/usergetcon");
const route=express.Router();

route.get("/get/user",getuserlist);
route.put("/point/:username",pointupdate);
route.get("/user/sort",usersort);

module.exports=route;