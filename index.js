import express from 'express'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import connectCloudinary from './Config/cloudinary.js'
import userRouter from './Routes/userRoute.js'
import productRouter from './Routes/productRoute.js'
import cartRouter from './Routes/cartRoute.js'
import orderRouter from './Routes/orderRoute.js'

const app = express()

dotenv.config()

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: ['https://vercel-eco-frontend.vercel.app/'], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'token'],
  credentials: true, 
};

app.use(cors(corsOptions));

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use(cookieParser());
connectCloudinary();

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.options('*', cors(corsOptions));  

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send({
        message: "Hello ji"
    });
});
  