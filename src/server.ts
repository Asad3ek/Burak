console.log("BURAK backend has started")
import dotenv from "dotenv"
dotenv.config();

//Connection mongoDb via mongoose package
import mongoose from "mongoose";
mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then(data => {
        console.log("Successfully connected to MongoDB");
        const PORT = process.env.PORT ?? 3003;
    })
    .catch(err => {
        console.log("ERROR on connection MongoDB: ", err)
    })