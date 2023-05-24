var express=require("express")
app=express()
app.use(express.json())
const mysql=require("mysql")
const fs=require("fs")

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


function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString("base64"); 
}

var base64str = base64_encode("blue.jpg");

app.post("/img/upload", (req, res) => {
    let sql = "insert into images(image)values('" + base64str + "');";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/img/import",(req,res)=>{
    let sql="select image from images"
    con.query(sql,(err,result)=>{
            if (err)throw err;
            console.log(result[0].image)
            const data= result[0].image;
            const buffer = Buffer.from(data, "base64")
            fs.writeFileSync("new-img.jpg", buffer);
    })
})


app.listen(8000,()=>{
    console.log("connection is stable")
})