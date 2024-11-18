import bcrypt from 'bcryptjs';
import userModel from '../../Models/userModel.js';
import { createToken } from '../../Config/createToken.js';

const userSignup = async (req, res) => {
  try {
    const { name, email, password, imageUrl  } = req.body;
    const image = req.file ? req.file.filename : null;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!email) {
      return res.json({ success: false, message: "Please enter a email" });
    }

    if (!name) {
        return res.json({ success: false, message: "Please enter a name" });
      }

      if (!password) {
        return res.json({ success: false, message: "Please enter a password" });
      }

    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a strong password" });
    }

    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      image
    });

    await newUser.save();
    const token = createToken(newUser._id)
    return res.json({ success: true, message: "User registered successfully",token,newUser });

  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export default userSignup;
