import userModel from "../../Models/userModel.js";

const userDelete = async (req, res) => {
  try {
    const userId = req.userId;

    const deletedUser = await userModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });

  } catch (error) {
    console.error("Delete User Error:", error);
    return res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

export default userDelete;
