var express=require("express")
app=express()
app.use(express.json())
const mysql=require("mysql")
const cors=require("cors")
app.use(cors())

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123qwe",
    database:"base"
})
con.connect(function(err){
    if(err)throw err;
    console.log("connection is online for mysql")
})

app.post("/signup",(req, res) => {
    firstname=req.body.ufirstname
    lastname=req.body.ulastname
    email=req.body.uemail
    password=req.body.upassword
    repassword=req.body.rpassword
  let s = 'call signup("'+firstname+'","'+lastname+'","'+email+'","'+password+'","'+repassword+'");'
   con.query(s,(err,result)=>{
    if(err)throw err
    console.log(result)
    res.send(result)
    })
});
app.post("/login", (req, res) => {
    email=req.body.uemail
    password=req.body.upassword
  let s = 'SELECT * FROM registration WHERE email="'+email+'" and passwd="'+password+'";'
   con.query(s,(err,result)=>{
    if(err)throw err
    console.log(result)
    let user=result
    jwt.sign({ user: user }, "secretkey", (err, token) => {
        res.json({user,token});
      });
    })
});

app.listen(8000,()=>{
    console.log("connection is stable")
})