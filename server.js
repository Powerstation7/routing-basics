const express = require("express")
const app = express();



app.get("/", function(reg, res){
    res.send("<h1>Home<h1>");
    console.log(req);
})

app.listen(1977, function(){
    console.log("server has started on port 1977");
});