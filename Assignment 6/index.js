var express = require('express');
var crypto = require('crypto');
const app = require("express")();
//var bodyParser = require('body-parser');
// app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get("/hash", (req,res)=>{
    res.send(`You've got to POST something :)`);
});

app.post("/hash",function(req,res){
    console.log("Data is: ",JSON.stringify(req.body));
    var hash = crypto.createHash('sha256').update(req.body.data).digest('hex');
    hash = hash.toString();
    res.json({'hash':hash});
    console.log(JSON.stringify({"hash":hash}),'\n');

})
app.listen(8787, ()=>console.log("Local Node is now active.\n"));
