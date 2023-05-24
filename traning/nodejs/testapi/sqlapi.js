var express=require("express")
app=express()
app.use(express.json())
const mysql=require("mysql")
app.listen(8000,()=>{
    console.log("connection is stable")
})
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123qwe",
    database:"project_biz"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connection is online for mysql")
})
app.post('/db',(req,res)=>{
    let s="select * from det"
    con.query(s,(err,result)=>{
        if(err)throw err;
        console.log(result)
        res.send(result)
    })
})
app.post('/signup',(req,res)=>{
    firstname=req.body.firstname
    lastname=req.body.lastname
    email=req.body.email
    passwd=req.body.passwd
    let s='insert into det(firstname,lastname,email,passwd) values("'+firstname+'","'+lastname+'","'+email+'","'+passwd+'");'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send("inserted sussefull")
    })
})
app.post('/login',(req,res)=>{
    email=req.body.email
    passwd=req.body.passwd
    let s='call check_user("'+email+'","'+passwd+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})
