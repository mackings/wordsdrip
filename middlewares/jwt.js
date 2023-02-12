const jwt = require("jsonwebtoken");



exports.verifytoken  = async (req, res, next)=>{
  const token = req.headers.authorization.split(' ')[1];


try { 
  const verifyit = jwt.verify(token,"jwt");
  if (verifyit) {
    console.log(verifyit);
    req.email = verifyit.email;
    next();
    
  } else {
    // res.status(401).json({
    //   status:"Failed",
    //   message:error
    // })

    
  }
 
  
} catch (error) {
  res.status(401).json({
    status:"Failed",
    message:error
  })
  
}



  // const token = req.headers.authorization.split(' ')[1];

  // const decoded = jwt.verify(token,"jwt");
  // if (decoded) {
  //   req.email = decoded.email;
  //   console.log(token);
  //   console.log(decoded);
  //    next();
  
  // } else {
  //       return res
  //         .status(401)
  //         .json({ message: 'Token Error', error: error.message });
      

    
  // }   

}