//9eee839f77c248208f614493f02b14a8


const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.send("Hello World");
})

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+ "/index.html");  
})

app.post("/bmicalculator",function(req,res){
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    
    var bmi = weight/(height*height);
    res.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("Server has started");
});
