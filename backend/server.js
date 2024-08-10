const express=require("express");
const app=express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT=6600;
const db=require("./db");
const Data=require('./models/info');
//app.use(cors());
app.use(bodyParser.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://66b7813c712ea1462dd76629--incandescent-chimera-dcde92.netlify.app'], // Adjust this based on your requirements
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());
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