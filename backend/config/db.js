import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('Your Mongodb uri here').then(()=>console.log("DB Connected"));
}
