import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db.js'
const app = express();

dotenv.config()
const PORT = process.env.PORT || 4000 

dbConnection() // call the data base


// app.get('/', (req, res)=>{
//     res.send(`<h1>Hey! Debu</h1>`);
// })

app.listen(PORT, ()=>{
    console.log(`App is Listening on Port: ${PORT}`)
})