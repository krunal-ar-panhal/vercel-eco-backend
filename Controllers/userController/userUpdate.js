import bcrypt from 'bcryptjs';
import { v2 as cloudinary } from 'cloudinary';
import userModel from '../../Models/userModel.js';



export const userUpdate = async (req, res) => {
  try {
    const userId = req.userId;  
    const { name, password , email} = req.body;
    let image = req.body.image;

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path);
      image = uploadResult.secure_url;
    }

    
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (image) user.image = image;

    await user.save();

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      updatedUser: {
        id: user._id,
        name: user.name,
        image: user.image,
        email: user.email,
      },
    });

  } catch (error) {
    console.error("Update Error:", error);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};
