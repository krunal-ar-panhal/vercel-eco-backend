import userModel from "../../Models/userModel.js";


export const updateCart = async (req, res) => {
    try {
      const { userId, itemId, size, quantity } = req.body;
  
      const userData = await userModel.findById(userId);
      if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
  
      let cartData = userData.cartData;
      if (cartData[itemId]) {
        cartData[itemId][size] = quantity; 
      } else {
        cartData[itemId] = { [size]: quantity };
      }
  
      await userModel.findByIdAndUpdate(userId, { cartData });
  
      return res.json({ success: true, message: "Cart Updated",cartData });
    } catch (error) {
      console.log(error); 
      return res.status(500).json({ success: false, message: error.message }); 
    }
  };
  