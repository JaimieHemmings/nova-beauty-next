import mongoose from "mongoose";

let connected = false;

const ConnectDB = async () => {
    mongoose.set('strictQuery', true);

    // If Databse is already connected don't reconnect
    if (connected) {
        console.log("MongoDB is already connected...");
        return;
    }

    // Connect to MongoDB
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        connected=true;
        console.log("MongoDB successfully connected...");
    } catch (error) {
        console.log(error)
    }
}

export default ConnectDB;