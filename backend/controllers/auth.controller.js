import bcryptjs from "bcryptjs";
import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !password ||
    !email ||
    username === "" ||
    password === "" ||
    email === ""
  ) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword
  })

  try {
    await newUser.save();
    res.json("sign up successfull")
  } catch (error) {
    next(error)
  }
};


export const signin = async (req,res, next) => {
    const { email, password } = req.body;
    if(!email || !password || email === "" || password ===""){
        return res.status(400).json({ message: "Please fill in all fields" });
    }
    try {
        const validUser = await User.findOne({email})
        if( !validUser ){
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isValidPassword = bcryptjs.compareSync(password, validUser.password);
        if(!isValidPassword){
            return res.status(400).json({ message: "Invalid password" });
        }
        const token = jwt.sign({id : validUser._id}, process.env.JWT_SECRET)

        const {password , ...rest} = validUser._doc;

        res.status(200).cookie("access_token", token,{
            httpOnly : true
        }).json(rest)

    } catch (error) {
        next(error)
    }
}