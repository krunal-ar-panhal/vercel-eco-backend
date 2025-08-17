import userModel from "../../Models/userModel.js";

const userGet = async (req, res) => {
  try {
    const userId = req.userId;  

    const user = await userModel.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      user,
    });

  } catch (error) {
    console.error("Get User Error:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export default userGet;
