const jwt = require("jsonwebtoken");



exports.verifytoken  = async (req,res,next)=>{

    try  {
        // 0      1
        // Bearer token
        const token = req.headers.authorization.split(' ')[1];
    
        if (!token) {
          return res.status(401).json({ message: 'Token Is missing' });
        }  
        const decoded = jwt.verify(token, "jwt"); 
        if (!decoded) {
          throw new Error();
        }
        next();
        console.log(decoded);
        req.user = decoded;
        next();
      } catch (error) {
        return res
          .status(401)
          .json({ message: 'Token Error', error: error.message });
      }

    

    

}