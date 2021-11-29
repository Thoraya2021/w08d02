//import to all package what  i install 
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
require("./db/index");


//run and config express 
const app = express();
dotenv.config();



//middel ware uses what i install and build should write here 
app.use(express.json());
app.use(cors());





//here to run locallhost 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server running at port ${PORT}`);
});
