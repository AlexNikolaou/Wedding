import express from "express";

var port = 3000;
var app  = express();

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.listen( port, ()=>{
    console.log(`Server is running on port ${port}.`);
});