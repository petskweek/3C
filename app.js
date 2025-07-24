const express = require("express");
const app = express();
const PORT = 5000;

const growagarden = require("./growagarden.json");

console.log(growagarden);

const player = {
    Name: "argieboyas",
    Perks: "Vlogger",
    S_line: 20,
    Pet: "T-rex"
}

app.post("/api/roblox", function(req, res){
    res.json(
        growagarden
    );
    
});
    console.log(growagarden)
    
app.listen(PORT, function(){
     console.log(`http://localhost:${PORT}`);
 });
