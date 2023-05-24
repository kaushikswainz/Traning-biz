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
    database:"react"
})
con.connect(function(err){
    if(err)throw err;
    console.log("connection is online for mysql")
})

app.post('/login',(req,res)=>{
    email=req.body.uemail
    passwd=req.body.upassword
    let s='call login_f("'+email+'","'+passwd+'")'
    // let s="select * from udetails";
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
        
    })
})

app.listen(8000,()=>{
    console.log("connection is stable")
})