import userModel from "../../Models/userModel.js";

export const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);
    if (!userData) {
        return res.status(404).json({ success: false, message: "User not found" });
      }
    let cartData = userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    return res.json({ success: true, message: "Added To Cart", cartData });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error.message,
    });
  }
};
