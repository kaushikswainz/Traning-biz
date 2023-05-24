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
    database:"hecto"
})
con.connect(function(err){
    if(err)throw err;
    console.log("connection is online for mysql")
})

app.post('/signup',(req,res)=>{
    email=req.body.email
    password=req.body.password
    password1=req.body.password1
    let s='call signup("'+email+'","'+password+'","'+password1+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})
app.post('/login',(req,res)=>{
    email=req.body.email
    password=req.body.password
    let s='call login("'+email+'","'+password+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/home/addto_cart',(req,res)=>{
    email=req.body.email
    quantity=req.body.quantity
    product_name=req.body.product_name
    let s='call addto_cart("'+email+'","'+quantity+'","'+product_name+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/home/subscription',(req,res)=>{
    let email=req.body.email
    let id = req.body.id
    let subscription_status=req.body.subscription_status
    let s = 'call sub_pro("'+id+'","'+email+'","'+subscription_status+'");'
    con.query(s,(err,result)=>{
        if(err) throw err
        console.log("updated")
        res.send("updated")
    })
    
})