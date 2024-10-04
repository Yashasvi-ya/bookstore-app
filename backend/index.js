import mongoose from 'mongoose'
import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=> console.log("database connected"))
.catch((error)=> console.log(error))

const app = express();

app.use(express.json())

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
})

app.use('/api/user',userRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server error'
    res.status(statusCode).json({
        success : false,
        statusCode,
        message
    })
})