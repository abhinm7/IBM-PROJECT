import express, { response } from "express"
import cors from "cors"
import { connectDb } from "./configs/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
//app config

const app = express()
const port = process.env.PORT || 5000;

//middleware 

app.use(express.json())
app.use(cors())
 
//db connection

connectDb();

//api endpoint

app.use('/api/food',foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter);
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)

app.get("/",(request,response)=>{
    response.send("API IS WORKING")
})

app.listen(port,()=>[
    console.log(`server started on http://localhost:${port}/`)
])

//mongodb+srv://abhinm:abhin123@cluster0.q32dmdd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0