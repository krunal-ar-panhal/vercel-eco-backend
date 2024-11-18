import orderModel from "../../Models/orderModel.js"
import userModel from "../../Models/userModel.js"

export const placeOrderCod = async (req,res) => {
    try {
       const {userId, items, amount, address} =  req.body
       const orderData = {
        userId, items, address, amount, paymentMethod:"COD", payment: false, date: Date.now()
       } 
       const  newOrder = new orderModel(orderData)
       await newOrder.save()
       await userModel.findByIdAndUpdate(userId,{cartData:{}})
       return res.json({
        success: true,
        message: "Order Placed"
       })
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            message: error.message
        })
        
    }
}