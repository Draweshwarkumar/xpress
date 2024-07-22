const express = require("express");
const app = express();

// console.log(app);

let port = 8000;
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
});

app.get("/apple",(req,res) =>{
    res.send({
        name:"apple",
        color:"red",
    });
});

app.get("/",(req,res)=>{
    res.send("This is home page");
})

app.get("/orange",(req,res)=>{
 res.send({
    name:"orange",
    color:"orange",
 })
})

// app.use((req,res) => {
//     console.log("request received");
//     const res1 = "<h1>fruits</h1><ul><li>Mango</li><li>Orange</li></ul>";
//     res.send(res1 );
// });