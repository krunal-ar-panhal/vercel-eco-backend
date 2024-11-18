import userModel from "../../Models/userModel.js";

export const getUserCart = async (req, res) => {
    try {
      const { userId } = req.body;
  
      const userData = await userModel.findById(userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      const cartData = userData.cartData || {};
  
      res.json({ success: true, cartData });
    } catch (error) {
      console.log(error); 
      res.status(500).json({ success: false, message: error.message }); 
    }
  };
  