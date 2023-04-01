const jwt = require("jsonwebtoken");



exports.verifytoken  = async (req, res, next)=>{
try { 
  const token = req.headers.authorization.split(' ')[1];
  const verifyit = jwt.verify(token,"jwt");
  if (verifyit) {
    console.log("Verified Token");
    next();
    
  } else {
    res.status(401).json({
      status:"Failed",
      message:error
    })

    
  }
   
  
} catch (error) {
  console.log(error);
  res.status(401).json({
    status:"Failed",
    message:error
  })
  
}
 

}