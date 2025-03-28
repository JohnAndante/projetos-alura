import mongoose from "mongoose";
import 'dotenv/config';

export const dbConnect = async () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

    return mongoose.connection;
};

export default dbConnect;
