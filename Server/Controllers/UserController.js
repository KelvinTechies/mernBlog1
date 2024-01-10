import User from "../Models/userModel.js"
import Jwt from "jsonwebtoken"
import generateToken from "../Utils/generateToken.js"

const registerUser = async (req, res) => {

    const { username, password, email } = req.body

    try {
        const existinguser = await User.findOne({ email })
        if (existinguser) {
            res.status(203).json({ msg: "Email already exists" })
        } else {
            const user = await User.create({ ...req.body })
            if (user) {
                res.status(201).json({ success: "User Created" })
            } else {
                res.status(500).send("Could not create user")

            }
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


const LoginUser = async (req, res) => {
    const { email, password } = req.body

    try {
        const emailUser =  await User.findOne({email})
        if (emailUser) {
            const pwd = await emailUser.comparePwd(password)
            if (pwd) {
                generateToken(res, emailUser._id)
                res.status(200).json({ 
                    _id:emailUser._id,
                    email:emailUser.email
                 })

            } else {
                res.status(403).send("Passwod not correct")

            }
        } else {
            res.status(401).send("User not found")
            
        }
    } catch (error) {
        res.status(400).send(error)
        console.log(error);
    }
}


const logoutUser = async (req, res)=>{
    res.cookie('jwt', "", {
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:' User Logged out'})
}

const getUser = async (req, res)=>{
    const {user_id} = req.params
    try {

        const user = await User.findById(user_id)

        if(user){
            const {password, ...others} = user._doc
            res.status(200).json(others)
        }else{
            res.status(404).json({error:"User cannot be found"})

        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}


const updateUser = async (req, res)=>{
    const {firstname, lastname, username, email,} = req.body
    const {user_id} = req.params
    try {

        if(!firstname || !lastname ||!username || !email){
            res.status(401).json({msg:"All Fields are required"})
        }else{

            const user =  await User.findById(user_id)
            if (user){
                const newUser = await User.findOneAndUpdate(user._id,  req.body, {new:true})
                if(newUser){
                 res.status(200).json({success:"User Updated successfully", newUser})

                }else{
                 res.status(401).json({msg:"Could not update the user"})

                }
            }else{
                 res.status(401).json({msg:"User not in Database"})

            }
        }
        
    } catch (error) {
        res.status(500).json(error)
    }
}



const deleteUser = async (req, res)=>{
    const {user_id} = req.params

    try {
            const user =  await User.findById(user_id)
            if (user){
                const newUser = await User.findOneAndDelete(user._id)
                if(newUser){
                 res.status(200).json({success:"User Deleted successfully"})

                }else{
                 res.status(401).json({msg:"Could not Delete the user"})

                }
            }else{
                 res.status(401).json({msg:"User not in Database"})

            }
        
    } catch (error) {
        res.status(500).json(error)
    }

}


export { registerUser, LoginUser, logoutUser, getUser, updateUser, deleteUser }