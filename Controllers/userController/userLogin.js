import bcrypt from 'bcryptjs';
import userModel from '../../Models/userModel.js';
import { createToken } from '../../Config/createToken.js';

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.json({ success: false, message: "Please enter an email" });
    }

    if (!password) {
      return res.json({ success: false, message: "Please enter a password" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    const token = createToken(user._id); 
    return res.json({ success: true, message: "Login successful", token, user,imageUrl: user.imageUrl,});
  } catch (error) {
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export default userLogin;
