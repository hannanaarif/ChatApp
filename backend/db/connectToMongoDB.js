import mongoose  from 'mongoose';

const connectToMongoDB=async()=>{
    try {
        await mongoose.connect(process.env.MANGO_DB_URI);
        console.log("connected to MongoDB");
        
    } catch (error) {
        console.log("Error connecting to MangoDB0",error.messsge)
    }
};

export default connectToMongoDB;