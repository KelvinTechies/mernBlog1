import mongoose from "mongoose";


const CommentSchema = mongoose.Schema({
    postId:{
        type:String
    },
    name:{
        type:String
    },
    description:{
        type:String
    }
})

const Comment = mongoose.model('Comments', CommentSchema)

export default Comment