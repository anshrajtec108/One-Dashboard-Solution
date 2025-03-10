import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";




const MongoDBconnect= async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB Host:${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MONGO_DB connection FAILED", error)
        process.exit(1)
    }
}

export default MongoDBconnect;