var express=require("express")
var app=express();

app.use(express.static('public'))
app.use('/css',express.static(__dirname+'/public/css'))
app.use('/images',express.static(__dirname+'/public/images'))

// Set View's
app.set('views',__dirname+'/views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
   res.render('main')
})


app.listen(8000,()=>{
    console.log("Connected!!")
})