import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        //define some flags this are exceptional
        // useNewUrlParser:true, 
        // useUnifiedTopology: true,
    })
    .then(()=>{
        console.log(`DB Connection is Successfully!`)
    })
    .catch((err)=>{
        console.log(`DB Connection is Failed!`)
        console.log(err.message)
        process.exit(1)
    })
}

export default dbConnection

