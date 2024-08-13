import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kumudh:1234@cluster0.autwy5u.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}