import mongoose from "mongoose";

const connectDB = async (url)=>{
    try {
     const connectingString =  await mongoose.connect(url)
     if(connectingString){
        console.log("App has Started");
     }else{
        console.log("Check your Data");
     }
    } catch (error) {
        console.log(error);
    }
}


export default connectDB