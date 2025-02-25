import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudnary from './config/cloudnary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB()
connectCloudnary()

//middlewares
app.use(express.json());
app.use(cors());

//api endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.get('/' , (req, res) => {
    res.send('Hello from the backend!')
})

//Listener
app.listen(port, () => console.log(`Server running on port ${port}`))