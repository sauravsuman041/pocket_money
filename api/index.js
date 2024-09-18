const express = require('express');
const cors = require('cors');
const Transaction = require('./model/Transation');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/test',(req,res)=>{
    res.json('test ok2');
});

app.post('/api/transaction',async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name,price,description,datetime} = req.body;
    const transaction = await Transaction.create({name,price,description,datetime});
    res.json(transaction);
});

app.get('/api/transactions',async (req,res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);
})

app.listen(4000);

//database user password
//LPRhaA6PjxyAGVHo