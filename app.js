// Dependencies
const express = require('express');

const app = express();
const port = 3000;

// Middleware to parse req and response to JSON
app.use(express.json()); 


app.get('/',(req,res)=>{
    res.send("안녕하세요");
});

app.listen(port);