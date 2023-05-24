var express=require("express")
var app=express();

app.use(express.json())
app.post("/sample",(req,res)=>{
    console.log("Hi my first api!!")
    res.send("Hi my first api!!")
})

app.use(express.json())
app.post("/add",(req,res)=>{
    a=req.body.a;
    b=req.body.b;
    console.log(a+b+"")
    res.send(a+b+"")
})

app.use(express.json())
app.post("/sub",(req,res)=>{
    a=req.body.a;
    b=req.body.b;
    console.log(a-b+"")
    res.send(a-b+"")
})

app.use(express.json())
app.post("/multi",(req,res)=>{
    a=req.body.a;
    b=req.body.b;
    console.log(a*b+"")
    res.send(a*b+"")
})

app.use(express.json())
app.post("/div",(req,res)=>{
    a=req.body.a;
    b=req.body.b;
    console.log(a/b+"")
    res.send(a/b+"")
})

app.use(express.json())
app.post("/rem",(req,res)=>{
    a=req.body.a;
    b=req.body.b;
    console.log(a%b+"")
    res.send(a%b+"")
})

app.listen(8000,()=>{
    console.log("Connected!!")
})