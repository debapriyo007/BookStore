import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db.js'
import allBooksRoute from './routes/books.route.js'
import userRouter from './routes/user.route.js'
import cors from 'cors'


const app = express();

//this is a middle ware to parse the json data backend to frontend.
app.use(cors())
app.use(express.json()) //this use to parse the data from fontend to backend.
dotenv.config()
const PORT = process.env.PORT || 4000 

dbConnection() // call the data base

//use all routers.
app.use('/v1/books', allBooksRoute)
app.use('/v1/user', userRouter)






app.listen(PORT, ()=>{
    console.log(`App is Listening on Port: ${PORT}`)
})
// app.get('/', (req, res)=>{
//     res.send(`<h1>Hey! Debu</h1>`);
// })
