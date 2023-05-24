'use strict';

var mysql=require("mysql")

const con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"123qwe",
  database:"hecto"
})
con.connect(function(err){
  if(err){
      console.log(err)
  }
  console.log("connection is online for mysql")
})

module.exports.login = async (event) => {
  const req= JSON.parse(event.body);
  let username=req.username;
  let password=req.password;

  let s='call login("'+username+'","'+password+'");'
  // let s="select * from det where email='"+username+"' and passwd='"+password+"'";
  console.log("values",s);

  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result[0]);
      }
    });
  });

  return {
    body: JSON.stringify(result)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


module.exports.signup = async (event) => {
  const req= JSON.parse(event.body);
  let username=req.username;
  let password=req.password;

  let s='call signup("'+username+'","'+password+'","'+password1+'");'
  console.log("values",s);

  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result[0]);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};

module.exports.addtocart = async (event) => {
  const req= JSON.parse(event.body);
  let username=req.username;
  let quantity=req.quantity;
  let product_name=req.product_name;
  
  let s='call addto_cart("'+username+'","'+quantity+'","'+product_name+'");'
  console.log("values",s);

  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result[0]);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};

module.exports.subscription = async (event) => {
  const req= JSON.parse(event.body);
  let id=req.id;
  let username=req.username;
  let subscription_status=req.subscription_status;
  
  let s = 'call sub_pro("'+id+'","'+username+'","'+subscription_status+'");'
  console.log("values",s);

  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result[0]);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};

module.exports.search = async (event) => {
  const req= JSON.parse(event.body);
  let value=req.value;
  
  
  let s = 'call search("'+value+'");'
  console.log("values",s);

  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result[0]);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};

module.exports.wishlist = async (event) => {
  const req= JSON.parse(event.body);
  let email=req.email;
  let productname=req.productname;
  
  let s = 'call atw("'+email+'","'+productname+'");'
  console.log("values",s);

  let result=await new Promise((resolve,reject)=>{
    con.query(s,function(err,result){
      if (err) resolve (err);
      else{
       console.log(result);
       resolve(result);
      }
    });
  });
  return {
    body: JSON.stringify(result)
  };
};