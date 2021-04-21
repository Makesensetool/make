const express = require('express');
const bodyParser=require("body-parser")
cors = require("cors");
const app=express()
app.use(cors());
const mysql=require("mysql");
const db=mysql.createPool({
    host:"localhost",
    user:'root',
    password:'Vijaykumar@32',
    database:'images'
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.static('public'));
app.use(express.json())
app.get("/api/images",(req,res)=>{
    const sqlselect ="SELECT * FROM image";
    db.query(sqlselect,(err,result)=>{
        res.send(result)
    })
})
app.get("/api/get",(req,res)=>{
    const ID=req.body.damagetype;
    const sqlselect="SELECT * FROM image";
    db.query(sqlselect,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/values",(req,res)=>{
   let val={
        "scratch":(`${db.query("SELECT count(id) as scratch FROM image WHERE damagetype='scratch'",(err,result)=>result)}`)
}
res.json(val);
})
app.post("/api/update",(req,res)=>{
    const ID=req.body.id;
    const sqlInsert="UPDATE image SET image.conditionstate='new' WHERE image.id IN (?)";
    db.query(sqlInsert,ID,(err,result)=>{
    console.log(err)
    })
});
app.listen(3001,()=>{
    console.log("running on port 3001")
})