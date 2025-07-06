import mongoose from "mongoose"

const url = process.env.DB_URL ?? "mongodb://localhost:27017/social"

const connectDB = async () => {
    try {
        console.log(url);
        const connect = await mongoose.connect(url)
        console.log("DB Connected");
    } catch (error) {
        console.log(error);
        console.log("Error");
    }
};

export default connectDB;