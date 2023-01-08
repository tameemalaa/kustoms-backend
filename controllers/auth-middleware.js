const authMiddleware = (req, res, next) => {
    const token = req.query.authorization;
    if(token == null)return res.status(401).send("Token is required");
    jwt.verify(token, process.env.ACCESS_SECRETE_TOKEN, (err,username) =>{
        if (err) {return res.status(403).send();}
        req.username = username; 
        next();
    })
}