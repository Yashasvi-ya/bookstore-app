import mongoose from "mongoose";
import { type } from "os";
import { string } from "prop-types";

const userSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    favorites:[{
        type : String,
        required :true
    }]
},{timstamps : true}
)

const User = mongoose.model("User",userSchema);

export default User;