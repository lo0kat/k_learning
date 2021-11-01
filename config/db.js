// Handle Database Connection Here
const mongoose = require('mongoose');
require('dotenv').config();

console.log("test");
mongoose.connect(process.env.DB_CONNECTION)

.then(
    ()=> {console.log("Database Connected ! ");},
    (err)=>{console.log("Fail to Connect : ",err);}
    );