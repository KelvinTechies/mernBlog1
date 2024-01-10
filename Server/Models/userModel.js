import mongoose from "mongoose";
import bcrypt from 'bcryptjs'





const UserSchema = mongoose.Schema({
    firstname: {
        type: String,
    },
    lastname: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String
    },
    password: {
        type: String,
    },

},
    {
        timestamps: true
    })



UserSchema.pre('save', async function (nxt) {
    if (!this.isModified('password')) {
        nxt()
    } else {
        const salt = await bcrypt.genSalt(10)
        this.password = await bcrypt.hash(this.password, salt)
    }
})


UserSchema.methods.comparePwd= async function(pwd){
    return await bcrypt.compare(pwd, this.password)
}



 const User = mongoose.model('Users', UserSchema)

 export default  User