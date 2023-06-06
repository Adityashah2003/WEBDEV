const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
import url,url1 from "./constants.js"
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {
    
    res.sendFile(__dirname+"/index.html")

})
app.post("/",function(req,res){
    const appid = "9eee839f77c248208f614493f02b14a8";
    const units = "metric"
    const query = req.body.city;
    https.get(url1,function(response){
        response.on("data",function(data){
            const weatherdata = JSON.parse(data);
            temp = weatherdata.main.temp;
            res.write(JSON.stringify(temp));
            res.send();
        })
    })
})

app.listen(3000, function(){
    console.log("Server has started");
});
