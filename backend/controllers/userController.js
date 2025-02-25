import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
}

// Route for user login

const loginUser = async (req, res) => {

};

// Route for user register

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //check user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.status(400).json({ success: false, msg: "User already exists" });
        }

        // validating email format and strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, msg: "Please enter a valid email" });
        }
        if (!validator.isLength(password, { min: 8 })) {
            return res.status(400).json({ success: false, msg: "Password should be at least 8 characters long" });
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // create new user
        const newUser = new userModel({ name, email, password: hashedPassword });
        const user = await newUser.save();

        const token = createToken(user._id);
        res.status(201).json({ success: true, token });
    } catch (error) { 
        console.error(error);
        res.status(500).json({ success: false, msg: error.message });
    }
};

// Route for admin login

const adminLogin = async (req, res) => {

};

export {
    loginUser,
    registerUser,
    adminLogin,
};
