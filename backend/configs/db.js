import mongoose, { mongo } from "mongoose";

export const connectDb = async()=>{
    mongoose.connect('mongodb+srv://abhinm:abhin123@cluster0.q32dmdd.mongodb.net/tomato').then(()=>{
        console.log("db connected");;
    })
}   