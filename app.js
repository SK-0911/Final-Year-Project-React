const express = require("express");
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());

app.use(express.static('public'));
app.use(cors())

app.get("/", function(req,res)
{
    res.sendFile(__dirname + "/index.html");
})

app.get("/login1.html", function(req,res)
{
    res.sendFile(__dirname + "/login1.html");
})


id = [{sap: 70362019470, pass: "utkarsh"}];


app.post("/login1.html", function(req, res)
{
    let sap = req.body.sapid;
    let password = req.body.pass;
    id.forEach((element) => {
        if(sap == element.sap && password == element.pass)
        {
            res.redirect(__dirname + "/home.html");
        }
    });
    
});

app.get("/home.html", function(req, res){

    res.sendFile(__dirname + "/home.html");
})

app.get("/cvbuilder.html", function(req, res){
    res.sendFile(__dirname + "/cvbuilder.html")
})

app.get("/docs.html", function(req, res){
    res.sendFile(__dirname + "/docs.html")
})






var port = 3000;
app.listen(port, function(){
    console.log("Server started on port "  + port);
});







