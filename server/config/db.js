import mongoose from 'mongoose';

export async function connectToMongoDB() {
  mongoose.connection.on('connected', ()=>{
    console.log("Successfully connected to MongoDB.")
  })
  await mongoose.connect(process.env.MONGODB_URI)
}