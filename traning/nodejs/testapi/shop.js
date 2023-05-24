var express=require("express")
app=express()
app.use(express.json())
const mysql=require("mysql")
app.listen(8001,()=>{
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

app.post('addto_cart',(req,res)=>{
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

app.post('/update_cart',(req,res)=>{
    user=req.body.user
    let s='DELETE FROM shopping_cart where refuser_id<="'+user+'";'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/clear',(req,res)=>{
    let s='call clear();'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})

app.post('/cart',(req,res)=>{
    user=req.body.user
    let s='select p.product_name,p.product_price,s.quantity from products p join  shopping_cart s on s.refproduct_id=p.product_id and s.refuser_id="'+user+'";'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})