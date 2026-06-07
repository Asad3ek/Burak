console.log("BURAK backend has started")
import dotenv from "dotenv"
dotenv.config();
import app from './app'

//Connection mongoDb via mongoose package
import mongoose from "mongoose";
mongoose
    .connect(process.env.MONGO_URL as string, {})
    .then(data => {
        console.log("Successfully connected to MongoDB");
        const PORT = process.env.PORT ?? 3003;
        app.listen(PORT, function () {
            console.log(`The Server Running Successfully on PORT: ${PORT}`)
            console.log(`Admin project running on http://localhost:${PORT}/admin`)
        })
    })
    .catch(err => {
        console.log("ERROR on connection MongoDB: ", err)
    }) 