var express=require("express")
app=express()
app.use(express.json())
var AWS = require("aws-sdk");

const doc = new AWS.DynamoDB.DocumentClient();


app.post("/insert",(req, res) => {
    var {tablename,items}=req.body
    for (let item of items) {
 
        let params = {
          TableName: tablename,
          Item: item
        };
      
        
        doc.put(params, function(err, data) {
          if (err) {
            console.error('Error:', err);
          } else {
            console.log('Success:', data);
          }
        });
      }
});

app.post("/search",(req, res) => {
    const{tablename,colname,values}=req.body;
    var params = {
      TableName: tablename,
      KeyConditionExpression: "#col = :value",
      ExpressionAttributeNames:{
          '#col': colname
      },
      ExpressionAttributeValues: {
          ":value": values
        }
    };
    doc.query(params,(err,result)=>{
      if(err)throw err
      console.log(result.Items)
      res.send(result.Items)
  })   
  });

app.listen(8000,()=>{
    console.log("connection is stable")
})