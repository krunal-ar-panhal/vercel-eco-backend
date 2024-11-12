import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()

dotenv.config()

const PORT = process.env.PORT;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT,()=>{
    console.log(`server on ${PORT}`);
})

app.get('/',(req,res)=>{
    res.send({
        message : "Hello ji"
    })
})