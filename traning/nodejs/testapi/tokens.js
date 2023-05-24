var express=require("express")
app=express()
app.use(express.json())
const mysql=require("mysql")
const jwt=require("jsonwebtoken")

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123qwe",
    database:"project_biz"
})
con.connect(function(err){
    if(err)throw err;
    console.log("connection is online for mysql")
})

function tokenVerify(req,res,next) {
    const bearerHeader = req.headers.token;
    console.log(bearerHeader)
    if (typeof bearerHeader !== "undefined") {
      jwt.verify(bearerHeader,"secretkey", (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          next();
        }
      });
    } else {
      res.sendStatus(403);
    }
}


app.post("/logincheck", (req, res) => {
    email=req.body.email
    passwd=req.body.password
  let s = 'SELECT * FROM det WHERE email="'+email+'" and passwd="'+passwd+'";'
   con.query(s,(err,result)=>{
    if(err)throw err
    console.log(result)
    let user=result
    jwt.sign({ user: user }, "secretkey", (err, token) => {
        res.json({user,token});
      });
    })
});


app.post("/getdata", tokenVerify, (req, resp) => {
  resp.send("Data from getdata");
});


app.listen(8000,()=>{
    console.log("connection is stable")
})