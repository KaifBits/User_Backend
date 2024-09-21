const {MongoClient}=require("mongodb");
const url="mongodb+srv://chuchu992233:rahaman%407890@cluster0.mj0eo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const mongo=new MongoClient(url);
async function connectDB() {
    try {
      await mongo.connect();
      console.log("MongoDB connected");
      return true;
    } catch (err) {
      console.error("Error connecting to MongoDB", err);
      throw err;
    }
  }
  
  function getDb() {
    return mongo.db("UserDashboard");
  }
  
  module.exports = { connectDB, getDb };