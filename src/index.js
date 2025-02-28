// require('dotenv').config({path: './env'})    //1st way

// import mongoose from 'mongoose';
// import { DB_NAME } from './constants';
import connectDB from './db/index.js';
import dotenv from 'dotenv';                 // 2nd way


dotenv.config({
    path: './env'
})



connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000 , () => {
        console.log(`server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection FAILED !!! ", err);
})




/*
import express from 'express';
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error) => {
            console.error("errr", error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("Error : ", error);
        throw error
    }
})()

*/

