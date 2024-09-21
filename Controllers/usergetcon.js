const {getDb}=require("../databaseconnection");
async function getuserlist(req, res) {
    
    try {
      const p = await getDb().collection("User").find({}).toArray();
      console.log(p)
  
   
  
      res.status(200).send(p);
    } catch (err) {
      console.error("Error found userlist", err);
      res.status(500).send("user not found");
    }
  }
  async function pointupdate(req, res) {
    const user=req.params.username;

    const point = Math.floor(Math.random() * 10) + 1;
    
    try {
      const p = await getDb().collection("User").findOne({ username: user });
      if (p) {
        await getDb().collection("User").updateOne(
          { username: user },
          { 
            $push: { His_points: point }, 
            $inc: { total_point: point } 
          }
        );
        await getDb().collection("claim_point_history").insertOne({
          username: user,
          points_claimed: point,
          timestamp: new Date()
        });
        res.status(200).send(`${point} points added successfully`);
      } else {
        res.status(404).send("User not found");
      }
    } catch (err) {
      console.error("Error", err);
      res.status(500).send("Internal error");
    }
    
  }
  async function usersort(req, res) {
    const user=req.params.username;

    const point = Math.floor(Math.random() * 10) + 1;
    
    try {
      const userlist= await getDb().collection("User").find({}).toArray();
    
      
  if(userlist){
    const sortedUsers = userlist.sort((a, b) => b.total_point - a.total_point);
    console.log(sortedUsers);
       res.status(200).send(sortedUsers);
  }
  else{
    res.status(404).send("npt found");
  }
  
      
    } catch (err) {
      console.error("Error", err);
      res.status(500).send("internal erre");
    }
  }


  module.exports={getuserlist,pointupdate,usersort};