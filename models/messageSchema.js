import mongoose from "mongoose";
import validator from "validator";
const messageSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"First Name must be atleast 3 characters"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"Last Name must be atleast 3 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"please provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"phone number must contain  10 digits"],
        maxLength:[10,"phone number must contain 10 digits "]
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"message must contain at least 10 characters"],

    },
    
})
export const Message=mongoose.model("Message",messageSchema)