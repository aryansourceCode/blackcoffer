const express=require("express");
const app=express();
//const cors = require('cors');
const bodyParser = require('body-parser');
const PORT=6600;
const db=require("./db");
const Data=require('./models/info');
//app.use(cors());
app.use(bodyParser.json());

app.get('/api/data', async (req, res) => {
    try {
      const data = await Data.find();
     // console.log(data);
      res.json(data);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

app.listen(PORT,()=>{
    console.log(`erver running on ${PORT}`);
})