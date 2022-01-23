var express = require('express');
var crypto = require('crypto');
const { response } = require('express');
const app = require("express")();
//var bodyParser = require('body-parser');
app.use(express.urlencoded({extended : false}));
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Never gonna give you up, Never gonna let you down, Never gonna run around and desert you, Never gonna make you cry, Never gonna say goodbye, Never gonna tell a lie and hurt you.");
})

app.get("/hash", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`);
});

app.post("/hash",function(req,res){
    console.log("Data is: ",JSON.stringify(req.body));
    var hash = crypto.createHash('sha256').update(req.body.data).digest('hex').toString();
    res.json({'hash':hash})
    //res.send(JSON.stringify({"hash":hash}),'\n');
    console.log(JSON.stringify({"hash":hash}),'\n');
})
app.listen(8787, ()=>console.log("If I'm printed, the Local Node is Active.\n")); 