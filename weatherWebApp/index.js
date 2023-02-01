const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=9eee839f77c248208f614493f02b14a8&units=metric"

app.get("/",function (req,res) {
    
    res.sendFile(__dirname+"/index.html")

})

app.post("/",function(req,res){
    const appid = "9eee839f77c248208f614493f02b14a8";
    const units = "metric"
    const query = req.body.city;
    const url1 = "https://api.openweathermap.org/data/2.5/weather?q=" + query+"&appid=" +appid + "&units="+ units;
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