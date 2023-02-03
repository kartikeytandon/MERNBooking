import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import hotelRoute from './routes/hotels.js'
import roomRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser'

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error.message)
    }
}

mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected")
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected")
})

// creating middlewares
app.use(express.json())
app.use(cookieParser())

app.use("/auth", authRoute)
app.use("/users", userRoute)
app.use("/hotels", hotelRoute)
app.use("/rooms", roomRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        errorMessage: errorMessage, 
        stack: err.stack 
    })
})

app.listen(8000, () => {
    connect()
    console.log("Connected to Backend")
})