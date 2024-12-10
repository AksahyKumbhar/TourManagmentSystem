import express from 'express';
import dotenv from 'dotenv';  // Corrected typo in 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tours.js';
import userRoute from './routes/users.js';
import authRoute from "./routes/auth.js";
import reviewRoute from "./routes/reviews.js"
import bookingRoute from "./routes/bookings.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials:true
}

// // for testing
// app.get("/", (req, res) => {
//     res.send("API is working");
// });

// database Connection 
mongoose.set("strictQuery", false);
const connect = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        console.log('Mongo database Connected');

    } catch (err) {
        console.log('MongoDB databse connection failed')

    }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);

app.listen(port, () => {
    connect();
    console.log('Server listening on port', port);
});
